import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


/*
type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newText: string | undefined) => void
}
*/

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} key={d.id} />)

    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id} />)

    //let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let sendMessage = () => {
        if (state.textForNewMessage.trim() !== "") {
            props.sendMessage()
        }
    }

    //???
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <h2>My Dialogs</h2>
            <br/>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={state.textForNewMessage}
                >

                </textarea>
                <br/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;