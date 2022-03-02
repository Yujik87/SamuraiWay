import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersPage-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: any) => {dispatch(setUsersAC(users))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)