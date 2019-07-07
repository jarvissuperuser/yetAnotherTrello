import React from 'react';
import AppNav from './AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBoard from './AppBoard';

class BoardPage extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNav>
                </AppNav>
                <AppBoard >
                </AppBoard>
            </div>
        );
    }
}

export default BoardPage;
