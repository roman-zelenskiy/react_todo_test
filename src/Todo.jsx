import React from "react";
import { GetTodo } from "./components/getTodo.jsx";
import { RenderTodo } from "./components/RenderTodo.jsx";

export const Todo = () => {


    return (
        <>
            <GetTodo/>
            <div className="todods">
                <div className="todods_header">
                    <p>ID</p>
                    <p>Title</p>
                    <p>Description</p>
                    <p>Status</p>
                </div>
                <RenderTodo/>
            </div>
        </>
    )
} 