import React, {useState} from 'react';
import './App.css';

function App(){
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  var globalId = 0;

  function addTodo(){
    if(title && desc){
      setTodos([...todos, {title, desc, id: {globalId}}])
      globalId++;
    }
  }
  
  function updateState(event){
    switch(event.target.id){
      case 'title':
        setTitle(event.target.value)
        break;

      case 'desc': 
        setDesc(event.target.value)
        break;

      default:
        break;
    }
  }

  function markAsDone(event){
    const parent = event.target.parentElement;
    parent.querySelector('button').innerHTML = 'done';
  }
 

  return(
    <>
      <h1>Hello, Shrikrushna</h1>
      
      
      <div>
        <input type="text" id="title" value={title} onChange={updateState}/>
        <input type="text" id="desc" value={desc} onChange={updateState}/>  
        <button onClick={addTodo}>add todo</button>
      </div>

      <div id="container">
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.desc}</p>
              <button onClick={markAsDone}> mark as done </button> 
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
