//import {addPostActionCreator, ChangeNewTextCallbackActionCreator} from "./profilePage-reducer";


type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type DialogPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    textForNewMessage: string
}

export type ActionsTypes = //ReturnType<typeof addPostActionCreator> |
    //ReturnType<typeof ChangeNewTextCallbackActionCreator> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof sendMessageAC>


//-----------ACTION CREATORS--------
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}
export const updateNewMessageTextAC = (NewMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        NewMessage: NewMessage
    } as const
}

let initialState: DialogPageType = {
    textForNewMessage: "",
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
}

const dialogsPageReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, textForNewMessage: action.NewMessage}
        case "SEND-MESSAGE":
            let body = state.textForNewMessage
            return {
                ...state,
                textForNewMessage: "",
                messages: [...state.messages, {id: new Date().getTime(), message: body}],
            }
        default:
            return state
    }
}

export default dialogsPageReducer