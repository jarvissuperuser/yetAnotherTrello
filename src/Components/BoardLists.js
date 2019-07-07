import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup , ListGroupItem } from 'reactstrap';
import BoardCreate from './BoardCreate';
import {connect} from "react-redux";
import { getItems } from "../actions/listActions";
import PropTypes from 'prop-types';

class BoardLists extends React.Component {
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


    render(){
        const { items } = this.props.item;
        return(
            <div>
                <ListGroup className='flex-row'>
                    {items.map(({name, id}) => (
                        <ListGroupItem className='card col-2 mr-2 bg-info'   >
                            <p className='card-header border-0 mt-2'><b>{name}</b></p>
                            <input type="text" placeholder='+ Add a Card' className='border-0 bg-transparent text-white'/>
                        </ListGroupItem>
                    ))}
                    <ListGroupItem className='card col-2 mr-2 ml-2 bg-transparent pb-3'>
                        <BoardCreate></BoardCreate>
                    </ListGroupItem>
                </ListGroup>
            </div>);
    };
}


const mapStateToProp = (state) => ({
    item: state.item
});

export default connect(mapStateToProp,{getItems})(BoardLists);
