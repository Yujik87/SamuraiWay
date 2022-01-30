import {combineReducers, createStore} from "redux";

let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    userPage: userPageReducer,
    sidebarPage: sidebarReducer
});

//export type AppStateType = ReturnType <typeof rootReducers>

let store = createStore(rootReducers);

export default store;
