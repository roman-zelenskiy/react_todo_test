const initialState = {
    switchMaodal: false,
    content: {}
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_MODAL_CONTENT": {
            state = {
                ...state,
                content: action.payload
            }
            break;
        }
        case "CHANGE_MODAL_VISIBILITY": {
            state = {
                ...state,
                switchMaodal: !state.switchMaodal
            }
            break;
        }
    }
    return state;
}  