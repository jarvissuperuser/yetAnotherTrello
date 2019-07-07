import React from 'react';
import AppNav from './Components/AppNav';
import AppModalBoard from './Components/AppBoardModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBoard from './Components/AppBoard';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNav>
                    </AppNav>
                    <AppBoard>
                    </AppBoard>
                    <AppModalBoard>
                    </AppModalBoard>
                </div>
            </Provider>
        );
    }
}

export default App;
