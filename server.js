require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// In-memory todos array
let todos = [];

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
    const todo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// Toggle todo completion
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    const updatedTodo = todos.find(todo => todo.id === id);
    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    
    if (todos.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Only start the server if this file is run directly
if (require.main === module) {
    const server = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    });
}

module.exports = app;