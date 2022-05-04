import { ADD_TODO } from "./action";

export const todoReducer = (store,{type,payload}) => {
    switch (type) { 
        case ADD_TODO: return { ...store, todos: [...payload] }
        default: return store
    }
}