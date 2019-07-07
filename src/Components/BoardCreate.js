import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from "react-redux";
import { addItems } from "../actions/listActions";
import PropTypes from 'prop-types';
import uuid from "uuid";

class BoardCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            name:''
        };
    }

    static propTypes = {
        addItems: PropTypes.func.isRequired,
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
                target.parentElement.parentElement.classList.remove("bg-transparent");
                target.parentElement.parentElement.classList.add("bg-white");
                target.classList.add("text-danger");
                target.nextElementSibling.classList.remove('hidden');
            } else {
                target.parentElement.parentElement.classList.remove("bg-white");
                target.parentElement.parentElement.classList.add("bg-transparent");
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
            this.props.addItems(this.itemsProto(this.state.name));
            ev.target.parentElement.firstElementChild.value = '';
            this.toggle(ev.target.parentElement.firstElementChild);
        }
    };
    onBlur = (ev) => {
        if(!this.state.active&&!this.state.name){
            this.toggle(ev.target);
        }
    };

    render(){
        return(
            <div>
                        <input type="text" placeholder='+ Add List' name='name'
                               className='border-0 col-12 bg-transparent text-white' autoComplete='off'
                               onFocusCapture={this.onfocus} onBlur={this.onBlur} onChange={this.onChange}/>
                        <button className='btn bg-success hidden mt-2' onClick={this.onSave}>Create List</button>
            </div>);
    };
}


const mapStateToProp = (state) => ({
    item: state.item
});

export default connect(mapStateToProp,{addItems})(BoardCreate);
