const request = require('supertest');
const app = require('./server');

describe('Todo API', () => {
    let testTodo;

    // Test GET /api/todos
    test('GET /api/todos should return all todos', async () => {
        const res = await request(app)
            .get('/api/todos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    // Test POST /api/todos
    test('POST /api/todos should create a new todo', async () => {
        const res = await request(app)
            .post('/api/todos')
            .send({ text: 'Test todo' });
        
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.text).toBe('Test todo');
        expect(res.body.completed).toBe(false);
        
        testTodo = res.body;
    });

    // Test PUT /api/todos/:id
    test('PUT /api/todos/:id should toggle todo completion', async () => {
        if (!testTodo) {
            throw new Error('Need to create a todo first');
        }

        const res = await request(app)
            .put(`/api/todos/${testTodo.id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body.completed).toBe(true);
    });

    // Test DELETE /api/todos/:id
    test('DELETE /api/todos/:id should delete a todo', async () => {
        if (!testTodo) {
            throw new Error('Need to create a todo first');
        }

        const res = await request(app)
            .delete(`/api/todos/${testTodo.id}`);
        
        expect(res.statusCode).toBe(204);
    });

    // Test not found scenarios
    test('PUT /api/todos/:id should return 404 for non-existent todo', async () => {
        const res = await request(app)
            .put('/api/todos/999999');
        
        expect(res.statusCode).toBe(404);
    });

    test('DELETE /api/todos/:id should return 404 for non-existent todo', async () => {
        const res = await request(app)
            .delete('/api/todos/999999');
        
        expect(res.statusCode).toBe(404);
    });
});