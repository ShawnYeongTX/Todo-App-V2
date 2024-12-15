import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";



export default function AddTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)
    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()

    function addTodo(event) {
        event.preventDefault()
        setTodos([...todos, {id: Date.now(), title, description, completed}])
        navigate('/')
    }

    return (
        <Container>
            <h1 className="my-3">Add Todo</h1>
            <Form onSubmit={addTodo}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    value={title} 
                    onChange={(e) => {
                    setTitle(e.target.value)
                    }}
                    type="text"
                    placeholder="Get Software developer job"
                    required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    value={description} 
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    type="textarea"
                    placeholder={`1. Create Amazing Project\n 2.Apply to Google & Netflix\n 3.Crush interview`}
                    required/>
                </Form.Group>

                <Form.Check 
                type="checkbox"
                id="completed"
                label="Mark as complted"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mb-3"/>

                <Button varient="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}