import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../action/todos.action.js";

export const GetTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(1);
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();
    const onChangeTitleInput = (e) => {
        setTitle(e.target.value);
    }   
    const onChangeDescriptionInput = (e) => {
        setDescription(e.target.value);
    }

    const validationInput = (input) => {
        let message = input.parentElement.getElementsByClassName('error_message')[0];
        if (input.value) {
            message.innerText = "";
            input.style.border = "1px solid black";
            return true;
        } else {
            input.style.border = "1px solid red";
            message.innerText = "This field is empty";
            return false;
        }
    }
    const getTodo = () => {
        dispatch(setTodos({
            id,
            title,
            description,
            status,
        }))
        setId(id + 1);
    }
    const onSubmitCreateTodo = (e) => {
        e.preventDefault();
        if (validationInput(e.target.title) && validationInput(e.target.description)) {
            getTodo();
            e.target.title.value = "";
            e.target.description.value = "";
        } 
    }
    return (
        <form action="#" onSubmit={onSubmitCreateTodo}>
            <div className="input_box">
                <div>
                    <p>Title:</p>
                    <input type="text" name="title" onChange={onChangeTitleInput}/>
                    <p className="error_message"></p>
                </div>  
                <div>
                    <p>Description:</p>
                    <input type="text" name="description" onChange={onChangeDescriptionInput}/>
                    <p className="error_message"></p>
                </div>
                <div><button type="submit">Create</button></div>
            </div>
        </form>
    )
}