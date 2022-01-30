import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./redux/state";
//import store from "./redux/state";
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



