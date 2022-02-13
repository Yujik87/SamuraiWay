import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';


type AppPropsType = {
    //store: StoreType
    //dispatch: number
}

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}
                    />
                <Route path='/profile'
                       render={() => <ProfileContainer />}
                    />

                    {/* <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
