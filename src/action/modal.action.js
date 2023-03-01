export const changeModal = (todo) => {
    return {
        type: "CHANGE_MODAL_CONTENT",
        payload: todo
    } 
}
export const changeModalVisibility = () => {
    return {
        type: "CHANGE_MODAL_VISIBILITY"
    } 
}