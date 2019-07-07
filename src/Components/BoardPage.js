import React from 'react';
import AppNav from './AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardLists from './BoardLists';

class BoardPage extends React.Component {
    render() {
        return (
            <div className="App" >
                <AppNav>
                </AppNav>
                <BoardLists>
                </BoardLists>
            </div>
        );
    }
}

export default BoardPage;
