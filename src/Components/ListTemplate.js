import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup , ListGroupItem } from 'reactstrap';
import {connect} from "react-redux";
import { getItems } from "../actions/listActions";
import PropTypes from 'prop-types';

class ListTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getItems();
    }

    onfocus = (ev) => {
        this.toggle(ev.target);
    };

    toggle(target){
        this.setState({
            active: !this.state.active
        });
        if (this.state.active) {
            target.parentElement.classList.remove("bg-transparent");
            target.parentElement.classList.add("bg-white");
            target.nextElementSibling.classList.remove('hidden');
        }else{
            target.parentElement.classList.remove("bg-white");
            target.parentElement.classList.add("bg-transparent");
            target.nextElementSibling.classList.add('hidden');
        }
    }
    onBlur = (ev) => {
        if(!this.state.active){
            this.toggle(ev.target);
        }
    };

    render(){
        const { items } = this.props.item;
        return(
            <div>
                <ListGroup className='flex-row' >

                    {items.map(({name,id}) => (

                        <ListGroupItem className='card col-2 mr-2' key={id}>
                            <p className=' border-0 mt-2'><b>{name}</b></p>
                            <p className='card-body'></p>
                        </ListGroupItem>
                    ))}
                    <ListGroupItem className='card col-2 mr-2 ml-2 bg-transparent'>
                        <input type="text" placeholder='+ Add List'
                               className='border-0 col-12 bg-transparent text-white' onFocusCapture={this.onfocus} onBlur={this.onBlur} />
                        <button className='btn bg-success hidden mt-2' >Create List</button>
                    </ListGroupItem>
                </ListGroup>
            </div>);
    };
}


const mapStateToProp = (state) => ({
    item: state.item
});

export default connect(mapStateToProp,{getItems})(ListTemplate);
