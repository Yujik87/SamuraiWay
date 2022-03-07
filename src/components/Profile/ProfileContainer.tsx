import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/usersPage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SetUserProfile} from "../../redux/profilePage-reducer";


class ProfileContainer extends React.Component<profilePropsType, profilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfile(response.data);
            });
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: []
}

let mapStateToProps = (state: AppStateType) => {
    return {
       profile: state.profilePage.profile
    }
}

type mapDispatchToPropsType = {
    SetUserProfile: (Profile: []) => void
}

export type profilePropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, {SetUserProfile}) (ProfileContainer)