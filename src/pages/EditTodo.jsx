import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";





export default function EditTodo() {
    const setTodos = useContext(TodoContext).setTodos
    const todo = useContext(TodoContext).todos
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    const currentTodo = todo.filter((todo) => todo.id === id) [0];
    const [title, setTitle] = useState(currentTodo.title)
    const [description, setDescription] = useState(currentTodo.description)
    const [completed, setCompleted] = useState(currentTodo.completed)

    function updateTodo(event) {
        event.preventDefault();
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {id, title, description, completed}
            }
            return todo
        })
        setTodos(updatedTodos)
        navigate("/")
    }
    return (
        <Container>
            <h1 className="my-3">Add Todo</h1>
            <Form onSubmit={updateTodo}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Get software developer job"
                    required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="1. Create amazing project"
                    required/>
                </Form.Group>
                <Form.Check 
                type="checkbox"
                id="completed"
                label="Mark as completed"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mb-3" />

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}