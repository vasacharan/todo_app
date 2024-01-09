import React, { useState } from 'react'
import TodosApp from './TodosApp';

const Task = () => {
const [text, setText] = useState('');
const [todos, setTodos] = useState([]);
const [date, setDate] = useState(null);

const newDate = new Date();

const handleInput=(e)=>{
    setText(e.target.value);
}
const handleSubmit=(e)=>{
e.preventDefault();
const newTodos = [...todos, text];
setTodos(newTodos);
setDate(newDate)
setText("");
}

const handleDelete=(indexVal)=>{
    const delTodo = todos.filter((todo, index)=>indexVal !== index)
    setTodos(delTodo);
}

  return (
    <div>
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Text' onChange={handleInput} value={text}/>
                <button type='submit' >add Task</button>
            </form>
            <TodosApp todosList ={todos} handleDelete={handleDelete} date={date} />
        </div>
        <h3>{text}</h3>
    </div>
  )
}

export default Task