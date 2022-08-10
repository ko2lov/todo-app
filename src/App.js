
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos] = useState([])
  
  const createTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }
  const removeTodo = (todo) =>{
    setTodos(todos.filter(t => t.id !== todo.id))
  }
  return (
    <div >
      <TodoForm create={createTodo}/>

      <TodoList remove={removeTodo} todos = {todos}/> 
    </div>

    
    
  );
}

export default App;
