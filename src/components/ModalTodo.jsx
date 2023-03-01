import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModalVisibility } from "../action/modal.action.js";
import { changeTodoStatus } from "../action/todos.action.js";
export const ModalTodo = () => {

    const { content } = useSelector((state) => state.modalReducer)
    const todoList = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();
    const onClickCloseModal = () => {
        dispatch(changeModalVisibility());
    }

    const onChangeStatus = (id) => {
        dispatch(changeTodoStatus(todoList, id))
    }

    return (
        <div className="modal_todo">
           <div className="modal_body">
                <h3>{content.title}</h3>
                <p className="description">
                    Description:
                    <p className="description_todo">{content.description}</p>
                </p>
                <label>Status:
                    <input type="checkbox" onChange={() => onChangeStatus(content.id)} checked={content.status} />
                </label> 
                <div>
                    <button onClick={onClickCloseModal}>close</button>
                </div>
           </div>
        </div>
    )
}