import React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Button
} from 'reactstrap';
import { addItems } from "../actions/boardActions";
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';
import {connect} from "react-redux";
import uuid from 'uuid';

class AppBoardModal extends React.Component {
    static propType = {
        // addItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            name:""
        };
        // this.toggle = React.createRef();
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    };

    itemsProto(name, color='bg-primary') {
        const new_Board  = {
            id: uuid(),
            color,
            name
        };
        return new_Board;
    }
    onChange = (ev) => {
        this.setState(({
            [ev.target.name] : ev.target.value
        }));
    };
    onSave = () => {
        if (this.state.name) {
            this.props.addItems(this.itemsProto(this.state.name));
        }
        this.toggle();
    };

    render(){
        return(
            <div>
                <Container>
                    <Button className='card bg-light text-dark col-2 mt-2' onClick={this.toggle}>
                        <div className='card-body mt-1'><span>Create new Board</span></div>
                    </Button>
                </Container>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='bg-transparent'
                       modalTransition={{ timeout:100 }} backdropTransition={{ timeout:500 }} >
                    <ModalHeader toggle={this.toggle} className=' bg-primary border-0'>
                        <input type='text' className='form-control border-0 bg-primary'
                               name='name' placeholder='Add Board Title' onChange={this.onChange}/>
                    </ModalHeader>
                    <ModalBody className='bg-primary border-0'>
                        <button className='btn bg-primary border-dark text-light'  ><FA name='check'  /></button>
                        <button className='btn bg-danger border-dark text-danger'><FA name='check'/></button>
                    </ModalBody>
                    <ModalFooter className='bg-primary border-0 d-flex d-lg-block'>
                        <Button className='' onClick={this.onSave}>Create Board</Button>
                    </ModalFooter>
                </Modal>
            </div>);
    };
}

const mapPropsToState = (state) =>({
   item: state.items
});


export default connect(mapPropsToState,{addItems})(AppBoardModal);
