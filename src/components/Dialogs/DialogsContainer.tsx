
import {
    sendMessageAC,
    updateNewMessageTextAC,
    DialogPageType,
} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
    }
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
