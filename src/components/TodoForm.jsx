import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import styles from './styles/form.module.css'

const TodoForm = ({create}) => {

    const [todo, setTodo] = useState({title : ''})

    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            ...todo,
            id: Math.floor((Math.random()*100000000))
        }
        create(newTodo)
        setTodo({title: ''})
        console.log(todo);
    }


    return (
        <form className={styles.formCreateTodo}>
            <MyInput 
            value = {todo.title}
            onChange={e => setTodo({...todo, title: e.target.value})}
            type="text" 
            placeholder="Название boards"
          />
          <MyButton onClick={addNewTodo}>Добавить доску</MyButton>
          
        </form>
    );
};

export default TodoForm;