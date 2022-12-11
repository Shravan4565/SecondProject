import './App.css';
import Header from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/Header.js";
import Todos from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/Todos.js";
import Footer from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/Footer.js";
import AddTodo from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/AddTodo.js";
import About from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/About.js";


import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos",JSON.stringify("todos")));
  }
  
  const onDelete = (todo)=>{
    console.log("Iam on delete of Todo",todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
localStorage.setItem("todos",JSON.stringify(todos));  }

  const addTodo = (title,desc)=>{
    console.log("we are addind title and desc",title,desc)
    let sno;
    if(todos.length === 0){
      sno=1;
    }
    else{
       sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);
    

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
    <BrowserRouter>
    <Header title="My Todo List" Searchbar={false}/>

    <Routes>
        <Route exact path="/" element={<><AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/> </>} />
        
              {/* </Route> */}
              <Route exact path="/about" element={<About />} />
              {/* </Route> */}
          
        </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
