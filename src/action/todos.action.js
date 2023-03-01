export const setTodos = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    } 
}
export const changeTodoStatus = (todoList, id) => {
    return {
        type: "CHANGE_STATUS",
        payload: todoList.map((todo) => {
            todo.id === id
                ? todo.status = !todo.status
                : false
            return todo;
        })
        }
    }