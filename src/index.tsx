import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./redux/state";
import store from "./redux/state";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                // state={state}
                // addPost={addPost}
                // addMessage={addMessage}
                // updateNewPostText={updateNewPostText}
                // updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


