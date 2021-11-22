import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';

function App(props: any) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.appState.dialogsPage}
                           />}
                    />
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.appState.profilePage}
                               addPost={props.addPost}
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
