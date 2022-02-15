
import {
    sendMessageAC,
    updateNewMessageBodyAC,
    DialogPageType,
} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchToPropsType = {
    addMessage: () => void
    newMessageChangeHandler: (text: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(sendMessageAC())
        },
        newMessageChangeHandler: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
