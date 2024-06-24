import react, {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData("");
    }

    return (
        <div>
            <form className="newTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="todo">Color: </label>
            <input 
            id="todo" 
            type="text"
            name="todo"
            placeholder="Input a todo"
            value={formData}
            onChange={handleChange}
             /> 

             <button>Add Todo!</button>
            </form>
        </div>
    )

}

export default NewTodoForm;