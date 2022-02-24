import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";

let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    //sidebarPage: sidebarReducer
});

export type AppStateType = ReturnType <typeof rootReducers>

let store = createStore(rootReducers);

export default store;
