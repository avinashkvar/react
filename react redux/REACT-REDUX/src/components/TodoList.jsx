import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css'
export const TodoList = () => {

    const todoState = useSelector((store)=>store.todos)
    // console.log('todoState1:', todoState)
    return (<div>{todoState.map((e) => {
        return (
            <Link className="todoList" key={e.id} to={`/todo/${e.id}`}>{e.title}</Link>)
    })}</div>)
}