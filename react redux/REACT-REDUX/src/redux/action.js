export const ADD_TODO = "ADDTODO"

export const addTodo = (data) => {
    return { type:ADD_TODO, payload:data}
}