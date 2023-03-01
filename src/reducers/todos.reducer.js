const initialState = []

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            state = [
                ...state,
                action.payload
            ]
            break;
        }
    }
    switch (action.type) {
        case "CHANGE_STATUS": {
            state = action.payload
            break;
        }
    }
    return state;
}  