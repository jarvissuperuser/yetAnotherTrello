import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup , ListGroupItem } from 'reactstrap';
import BoardCreate from './BoardCreate';
import CardCreator from './CardCreator';
import {connect} from "react-redux";
import { getLists } from "../actions/listActions";
import PropTypes from 'prop-types';

class BoardLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }

    static propTypes = {
        getLists: PropTypes.func.isRequired,
        item: PropTypes.object
    };

    componentDidMount() {
        this.props.getLists();
    }


    render(){
        console.log(this.props,'has items');
        const { lists } = this.props.item;
        return(
            <div>
                <ListGroup className='flex-row'>
                    {lists.map(({name, id}) => (
                        <ListGroupItem className='card col-2 mr-2 bg-info' key={id}  >
                            <p className='card-header border-0 mt-2'><b>{name}</b></p>
                            <CardCreator pos={id}></CardCreator>
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
    item: state.list
});

export default connect(mapStateToProp,{getLists})(BoardLists);
