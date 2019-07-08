import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import { Locations, Location } from 'react-router-component';
import HomePage from "./Components/HomePage";
import BoardPage from "./Components/BoardPage";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Locations hash>
                    <Location path='/' handler={HomePage} />
                    <Location path='/home' handler={HomePage} />
                    <Location path='/board/:id' handler={BoardPage}/>
                    <Location path='/board' handler={BoardPage}/>
                </Locations>
            </Provider>
        );
    }
}

export default App;
