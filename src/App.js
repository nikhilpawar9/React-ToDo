import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from 'react';


function App() {
  
  const onDelete=(todo)=>{
    console.log("I am onDelete of ",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }


  const [todos,setTodos]= useState([
    {
      sno:1,
      title:"Goto 1 mall",
      desc:" Desc 1"
    },
    {
      sno:2,
      title:"Goto 2 mall", 
      desc:" Desc 2"
    },
    {
      sno:3,
      title:"Goto 3 mall",
      desc:" Desc 3"
    },
  ])
  return (
    <>
      <Header title="My Todos List"/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  ); 
}

export default App;
 