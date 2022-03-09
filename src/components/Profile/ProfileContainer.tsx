import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/usersPage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SetUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<profilePropsType, profilePropsType> {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.SetUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: []
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
       profile: state.profilePage.profile
    }
}

type mapDispatchToPropsType = {
    SetUserProfile: (Profile: []) => void
}

export type profilePropsType = mapStateToPropsType & mapDispatchToPropsType;

// @ts-ignore
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {SetUserProfile}) (withUrlDataContainerComponent)