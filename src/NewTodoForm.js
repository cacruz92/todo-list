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
            <label htmlFor="todo"><b>Add a Todo Item: </b> </label>
            
            <input 
            id="todo" 
            type="text"
            name="todo"
            placeholder="Input a todo"
            value={formData}
            onChange={handleChange}
             /> 
            <br></br>
             <button>Add Todo!</button>
            </form>
        </div>
    )

}

export default NewTodoForm;