//import {sendMessageAC, updateNewMessageBodyAC} from "./dialogsPage-reducer";


type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    //ReturnType<typeof updateNewMessageBodyAC> |
    //ReturnType<typeof sendMessageAC> |
    ReturnType<typeof SetUserProfile>

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: []

}
export type SetUserProfile = {
    type: "SET-USER-PROFILE"
    Profile: []
}


//-----------ACTION CREATORS--------
export const addPostAC = () => {
    return {
        type: "ADD-POST"
        // postMessage: postMessage
    } as const
}
export const updateNewPostTextAC = (NewText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        NewText: NewText
    } as const
}
export const SetUserProfile = (Profile: []) => {
    return {
        type: "SET-USER-PROFILE",
        Profile
    } as const

}


let initialState: ProfilePageType = {
    messageForNewPost: "it-kamasutra",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Data', likesCount: 11},
    ],
    profile: [],

}


const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newMessage = state.messageForNewPost
            return {
                ...state,
                posts: [{id: new Date().getTime(), message: newMessage, likesCount: 0}, ...state.posts],
                messageForNewPost: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, messageForNewPost: action.NewText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.Profile}
        default:
            return state
    }

}

export default profilePageReducer