import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersPage-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: any) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber: number) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)