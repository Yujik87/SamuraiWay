import {rerenderEntireTree} from "../render";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array <PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It`s my first post", likesCount: 11},
        ],
        newPostText: 'IT-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'},
            {id: 6, message: 'Yo!'},
        ]
    },
    sidebar: {}
}

export let addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;