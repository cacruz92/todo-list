import react from "react";

const Todo = ({id, item, removeTodo}) => {
    const handleClick = () => {
        removeTodo(id)
    }

    return (
        <li> 
            {item}
            <button onClick={handleClick}>X</button>
        </li>
    )
}

export default Todo;