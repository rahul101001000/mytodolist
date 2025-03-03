# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### 1. Get All Todos
Retrieves a list of all todo items.

- **URL**: `/todos`
- **Method**: `GET`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content Example**:
```json
[
    {
        "id": 1677934681254,
        "text": "Buy groceries",
        "completed": false
    },
    {
        "id": 1677934689427,
        "text": "Walk the dog",
        "completed": true
    }
]
```

#### Error Response
- **Code**: `500 Internal Server Error`
- **Content**: `{ "error": "Internal server error" }`

#### Sample Call
```javascript
const response = await fetch('http://localhost:3000/api/todos');
const todos = await response.json();
```

### 2. Create Todo
Creates a new todo item.

- **URL**: `/todos`
- **Method**: `POST`
- **Auth Required**: No

#### Request Body
```json
{
    "text": "New todo item"
}
```

#### Success Response
- **Code**: `201 Created`
- **Content Example**:
```json
{
    "id": 1677934681254,
    "text": "New todo item",
    "completed": false
}
```

#### Error Response
- **Code**: `400 Bad Request`
- **Content**: `{ "error": "Text is required" }`

#### Sample Call
```javascript
const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: 'New todo item' })
});
const newTodo = await response.json();
```

### 3. Toggle Todo Status
Toggles the completion status of a todo item.

- **URL**: `/todos/:id`
- **Method**: `PUT`
- **URL Parameters**: `id=[integer]`
- **Auth Required**: No

#### Success Response
- **Code**: `200 OK`
- **Content Example**:
```json
{
    "id": 1677934681254,
    "text": "Buy groceries",
    "completed": true
}
```

#### Error Response
- **Code**: `404 Not Found`
- **Content**: `{ "error": "Todo not found" }`

#### Sample Call
```javascript
const response = await fetch('http://localhost:3000/api/todos/1677934681254', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
});
const updatedTodo = await response.json();
```

### 4. Delete Todo
Deletes a todo item.

- **URL**: `/todos/:id`
- **Method**: `DELETE`
- **URL Parameters**: `id=[integer]`
- **Auth Required**: No

#### Success Response
- **Code**: `204 No Content`
- **Content**: None

#### Error Response
- **Code**: `404 Not Found`
- **Content**: `{ "error": "Todo not found" }`

#### Sample Call
```javascript
const response = await fetch('http://localhost:3000/api/todos/1677934681254', {
    method: 'DELETE'
});
```

## Data Models

### Todo Item
```typescript
{
    id: number;        // Timestamp-based unique identifier
    text: string;      // The todo item text
    completed: boolean; // Completion status
}
```

## Common HTTP Status Codes

- `200 OK`: Request succeeded
- `201 Created`: Resource created successfully
- `204 No Content`: Request succeeded, no content returned
- `400 Bad Request`: Invalid request format
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Error Handling

All endpoints return errors in the following format:
```json
{
    "error": "Error message description"
}
```

## Rate Limiting
Currently, no rate limiting is implemented.

## CORS
CORS is enabled for all origins in development. In production, this should be configured based on deployment requirements.

## Future Enhancements

1. Authentication/Authorization
2. Request validation
3. Rate limiting
4. API versioning
5. Pagination for GET /todos
6. Search and filter capabilities
7. Due dates and priorities
8. Batch operations