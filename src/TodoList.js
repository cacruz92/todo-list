import react, {useState} from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

const TodoList = () => {
    const INITIAL_STATE = [{id: uuid(), item: "Go to grocery store"}, {id: uuid(), item: "Go to Laundromat"}];
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newItem) => setTodos([...todos, {item: newItem, id: uuid()}])
    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos)
    }

    return(
        <div className="todoMain">
            <NewTodoForm addTodo={addTodo}/ >
            <ul>
            {todos.map(({id, item}) => (
                 <Todo key={id} 
                 id={id} 
                 item={item} 
                 removeTodo={removeTodo}
                 />   
            ))}
            </ul>
        </div>
    )
}

export default TodoList;
