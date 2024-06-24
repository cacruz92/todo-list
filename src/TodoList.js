import react, {useState} from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

const TodoList = () => {
    const INITIAL_STATE = [{id: uuid(), item: "Go to grocery store"}, {id: uuid(), item: "Go to Laundromat"}];
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newItem) => setTodos([...todos, {item: newItem, id: uuid()}])

    return(
        <div>
            <NewTodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoList;
