import React from "react";
import {
    Navbar,
    Container,
} from 'reactstrap';
import FA from 'react-fontawesome';
import 'react-fontawesome';

class AppNav extends React.Component {

    showModal = () => {
    };
    render(){
        return(
        <div>
            <Navbar className='mb-5 bg-primary' expand='sm'>
                <Container className=''>
                    <a className='btn bg-info text-dark mr-2 p-0 d-flex '><FA name='home' size='2x'/></a>
                    <a className='btn bg-info text-dark mr-2 p-0 d-flex'><FA name='trello' size='2x'/></a>
                    <div className='col-5'></div>
                    <a className="btn bg-info text-dark p-0 d-flex"><FA name='trello' size='2x'/></a>
                    <div className='col-5'></div>
                    <a className='btn btn-info p-0 d-flex' onClick={this.showModal}><FA name='plus' size='2x'/></a>
                    {/*<input type="search" className='form-control bg-secondary ' id=""/>*/}
                </Container>
            </Navbar>
        </div>);
    };
}


export default AppNav;
