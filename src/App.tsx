import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import Users from "./components/Users/Users";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/users'
                       render={() => <Users/>}
                />
                {/*<Route path='/profile'
                       render={() => <ProfileContainer />}
                    />*/}

                {/* <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
