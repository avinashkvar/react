import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import axios from "axios";
const Input = styled.input`
  background-color: #ffffff;
  border:0px;
  padding:15px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:10px;
  font-size: 16px;
  margin:0px 15px 0px 0px;
  width:282px;
`;
const Div= styled.div`

 width:500px;
 margin:auto;
`;
const Button = styled.button`
  background-color: #ffffff;
  border:0px;
  padding:15px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:10px;
  font-size: 16px;
  font-weight:bold;
 
`;

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState({});
  function todoInputTrack(e) {
    const { name, value } = e.target;
    setTodoInput({ ...todoInput, [name]: value, status: "false" });
  }
  async function getData() {
    axios
      .get("http://localhost:8080/todoList")
      .then(function (response) {
        // handle success
        // console.log("uuuuuuuuuuu");
        dispatch(addTodo(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  async function postData() {
    axios
      .post("http://localhost:8080/todoList", {
        ...todoInput,
      })
      .then(function (response) {
        // console.log(response);
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
//   console.log(todoInput);
  return (
    <Div>
      <Input
        name="title"
        type="text"
        placeholder="Please Enter Your Task"
        onChange={todoInputTrack}
      ></Input>
      <Button
        onClick={() => {
          postData();
         
        }}
      >
      +
      </Button>
    </Div>
  );
};
