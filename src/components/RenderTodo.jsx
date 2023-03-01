import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalTodo } from "./ModalTodo.jsx";
import { changeModal, changeModalVisibility } from "../action/modal.action.js";
import { changeTodoStatus } from "../action/todos.action.js";

export const RenderTodo = () => {
    const todoList = useSelector((state) => state.todosReducer);
    const {switchMaodal} = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();

    const onClickTodo = (e, todo) => {
        if (e.target.name !== 'status') {
            dispatch(changeModal(todo))
            dispatch(changeModalVisibility())
        }
    }

    const onChangeStatus = (id) => {
        dispatch(changeTodoStatus(todoList, id))
    }
    return (
        <>
            <ul className="todods_box">
                {todoList.map(todo =>
                    <li onClick={(e) => onClickTodo(e,todo)}>
                        <span>{todo.id}</span>
                        <h3>{todo.title}</h3>
                        <p className="description_todo">{todo.description}</p>
                        <input type="checkbox" name="status" onChange={() => onChangeStatus(todo.id)} id={`todo_status${todo.id}`} checked={todo.status} />
                    </li>
                )}
            </ul>
            {
                switchMaodal
                    ? <ModalTodo />
                    : false
            }
        </>
    )
}