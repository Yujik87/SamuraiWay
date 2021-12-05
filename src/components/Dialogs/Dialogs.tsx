import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(
        m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage =() => {}

    let onMessageChange = () => {}

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
                    name="newMessage"
                    ref={newMessageElement}
                    value={props.state.newMessageText}
                >

                </textarea>
                <br/>
                <button>Send message</button>
            </div>
        </div>
    )
}