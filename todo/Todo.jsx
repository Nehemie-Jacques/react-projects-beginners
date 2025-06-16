import { useState } from "react";
import "./style.css";

function generateId() {
    return Math.floor(Math.random() * 1000000);
}

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({ // crée une nouvelle liste avec un objet en plus.
                text: input,
                id: generateId(),
            })
        );
        setInput("");
    };

    const removeTodo  = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    }

    return (
        <div className="container">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)} // à chaque frappe, on met à jour input avec ce que tape l’utilisateur.
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({ text, id }) => ( //  on parcourt la liste des tâches, pour chaque tache, on affiche le texte et le bouton de suppression
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;