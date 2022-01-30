
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array <PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type SidebarType = {}

type StateType = {
    profilePage: {
        messageForNewPost: string,
        posts: { id: number, message: string, likesCount: number }[],
    }
    dialogsPage: {
        messageForNewMessage: string,
        messages: { id: number, message: string }[],
        dialogs: { id: number, name: string }[],
    }
    sidebar: {}
}
type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =  ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof ChangeNewMessageCallbackActionCreator> |
    ReturnType<typeof addMessageActionCreator>

/*export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

//window.state = state;

export type StoreType = {
    _state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    _rerenderEntireTree: () => void
    subscribe:(observer: () => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
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
            ],
            newMessageText: 'Type your message here!'
        },
        sidebar: {}
    },
    addPost(){
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    addMessage(){
        let newMessage  = {
            id: 8,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewMessageText(newText: string){
        this._state.dialogsPage.newMessageText = newText;
        this._rerenderEntireTree(this._state);
    },
    _rerenderEntireTree(){
        console.log('State changed!')
    },
    subscribe(observer: () => void){
        this._rerenderEntireTree = observer;
    },
    getState(){
        return this._state;
    }
}*/

//export default store;
//window.store = store;