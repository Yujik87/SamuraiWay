import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts/MyPosts";


type mapStateToPropsType = {
    messageForNewPost: string
    posts: Array<PostType>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer