import { useState,useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom"
import '../App.css'
import axios from "axios";
export const TodoDetail = () => {
    const nav =useNavigate()
    const { id } = useParams()
    const [data,setData]=useState({})
    async function getData() {
        axios
          .get(`http://localhost:8080/todoList/${id}`)
          .then(function (response) {
            // handle success
            console.log(response.data);
            setData({...response.data})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
    async function deleteData() {
        axios
          .delete(`http://localhost:8080/todoList/${id}`)
          .then(function (response) {
            // handle success
            console.log(response.data);
            nav("/")
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
    async function patchData() {
        axios
          .patch(`http://localhost:8080/todoList/${id}`,{...data,status:`${data.status=="false"?"true":"false"}`})
          .then(function (response) {
            // handle success
            console.log(response.data);
            getData();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
    useEffect(() => {
        getData();
    }, []);
   
    return (<div key={data.id}>
        <div className="title">{data.title}</div>
        <div onClick={() => {
            patchData()
        }} className={data.status=="false"?"status red":"status green"} >{data.status=="false"?"Not Completed":"Completed"}</div>
        <button className="btn" onClick={() => {
            deleteData()
        }}>
            Delete
        </button>
       
    </div>)
}