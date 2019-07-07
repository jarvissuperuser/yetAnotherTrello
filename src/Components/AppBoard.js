import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup , ListGroupItem } from 'reactstrap';
import {connect} from "react-redux";
import { getItems } from "../actions/boardActions";
import AppBoardModal from './AppBoardModal';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import FA from 'react-fontawesome';

class AppBoard extends React.Component {
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
                <Container>
                    <ListGroup className='flex-row'>
                        {items.map(({name,color}) => (

                            <ListGroupItem className='card col-2 mr-2' color={color}>
                                <p className=' border-0 mt-2'><b>{name}</b></p>
                                <p className='card-body'></p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
                <AppBoardModal></AppBoardModal>
            </div>);
    };
}


const mapStateToProp = (state) => ({
    item: state.item
});

export default connect(mapStateToProp,{getItems})(AppBoard);
