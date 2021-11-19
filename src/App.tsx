import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';

function App(props: any) {
    /* let posts = [
         {id: 1, message: "Hi, how are you?", likesCount: 12},
         {id: 2, message: "It`s my first post", likesCount: 11},
     ]*/

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.appState.dialogsPage}
                           />}
                    />
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.appState.profilePage}
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
