import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from "react-redux";
import { addCards } from "../actions/cardActions";
import PropTypes from 'prop-types';
import uuid from "uuid";

class CardCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            name:''
        };
    }

    static propTypes = {
        addCards: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
    };

    componentDidMount() {
    }

    onfocus = (ev) => {
        this.toggle(ev.target);
    };

    toggle(target){
        this.setState({
            active: !this.state.active
        });
        try {
            if (this.state.active) {
                //target.parentElement.parentElement.classList.remove("bg-transparent");
                //target.parentElement.parentElement.classList.add("bg-white");
                // target.classList.add("text-danger");
                target.parentElement.classList.remove('hidden');
            } else {
                // target.parentElement.parentElement.classList.remove("bg-white");
                // target.parentElement.parentElement.classList.add("bg-transparent");
                target.nextElementSibling.classList.add('hidden');
            }
        }catch(e){
            console.log(e);
        }
    }
    itemsProto(name) {
        const new_Board  = {
            id: uuid(),
            name
        };
        return new_Board;
    }
    onChange = (ev) => {
        this.setState(({
            [ev.target.name] : ev.target.value
        }));
    };
    onSave = (ev) => {
        if (this.state.name) {
            this.props.addList(this.itemsProto(this.state.name));
            ev.target.parentElement.firstElementChild.value = '';
            this.toggle(ev.target.parentElement.firstElementChild);
        }
    };
    onBlur = (ev) => {
        if(this.state.active&&!this.state.name){
            this.toggle(ev.target);
        }
    };
    onclick(ev) {
        CardCreator.closedOpened();
        const target = ev.target;target.classList.add('hidden');
        const textareaWrap = target.nextElementSibling;
        const textarea = textareaWrap.querySelector("textarea");
        textareaWrap.classList.remove('hidden');
        textarea.focus();
        target.parentElement.classList.add('opened');
    }

    close(ev){
        let wrapper = ev.target.parentElement;
        if(!wrapper.classList.contains('flex-row')){
            wrapper = wrapper.parentElement;
        }
        wrapper.classList.add('hidden');
        wrapper.parentElement.firstElementChild.classList.remove('hidden');

    }

    static closedOpened(){
        const parent = document.querySelectorAll('.opened');
        parent.forEach(e => {
            e.querySelector('div.flex-row').classList.add('hidden');
            e.querySelector('a.decor').classList.remove('hidden');
            e.classList.remove('opened');
        });

        // parent.classList.remove('opened');
    }

    render(){
        return(
            <div>
                <a onClick={this.onclick} className='mt-1 decor'>
                    + Add a Card
                </a>
                <div className='hidden flex-row'>
                    <textarea className='col-12' placeholder="Enter title for this card" ></textarea>
                    <a className='btn bg-success mt-1 text-white' onClick={this.onSave}>Add Card</a>
                    <a onClick={this.close} className='btn bg-transparent mt-1 pt-0 pb-0' ><span className='fa-2x'>&times;</span></a>
                </div>
            </div>);
    };
}


const mapStateToProp = (state) => ({
    item: state.item
});

export default connect(mapStateToProp,{addCards})(CardCreator);
