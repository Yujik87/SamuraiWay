import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage={state.dialogsPage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}
                           />}
                    />
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}
                    />

                    {/* <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
