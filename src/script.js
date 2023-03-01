import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import { Provider } from "react-redux";

import { store } from "./store.js";
import { Todo } from "./Todo.jsx";

const root = ReactDOM.createRoot(document.getElementById('todo'));
root.render(
        <Provider store={store}>
                <Todo />
        </Provider>
);

