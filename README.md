# Todo List Application

A simple, yet well-structured todo list application built with Node.js/Express backend and vanilla JavaScript frontend. Features in-memory storage, Docker support, and comprehensive testing.

## Project Structure

### Core Application Files
- `index.html` - Main frontend interface
- `style.css` - Application styling
- `app.js` - Frontend JavaScript logic
- `server.js` - Express backend server

### Configuration Files
- `package.json` - Project dependencies and scripts
- `.env` - Environment variables configuration
- `.gitignore` - Git ignore patterns
- `.dockerignore` - Docker ignore patterns
- `Dockerfile` - Docker container configuration

### Documentation
- [APP.md](docs/APP.md) - Detailed application architecture and design patterns
- [DOCKER.md](docs/DOCKER.md) - Docker setup and best practices
- [TESTING.md](docs/TESTING.md) - Testing strategy and examples

### Testing
- `server.test.js` - API endpoint tests using Jest and Supertest

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

3. Run tests:
```bash
npm test
```

## Docker Support

Build and run with Docker:
```bash
docker build -t mytodolist .
docker run -p 3000:3000 mytodolist
```

## Key Features

1. **Frontend**
   - Clean, responsive UI
   - Real-time updates
   - Error handling

2. **Backend**
   - RESTful API
   - Express server
   - In-memory storage

3. **Development**
   - Hot reloading support
   - Environment configuration
   - Comprehensive testing

## Documentation Highlights

1. **Application Architecture** ([APP.md](docs/APP.md))
   - Component hierarchy
   - Design patterns
   - Code organization

2. **Docker Setup** ([DOCKER.md](docs/DOCKER.md))
   - Container architecture
   - Best practices
   - Development workflow

3. **Testing Strategy** ([TESTING.md](docs/TESTING.md))
   - Test architecture
   - Example tests
   - Best practices

## API Endpoints

- `GET /api/todos` - Retrieve all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion
- `DELETE /api/todos/:id` - Remove a todo

## Scripts

- `npm start` - Start the server
- `npm test` - Run tests
- `npm run dev` - Start with hot reloading

## Further Reading

- Detailed design patterns in [APP.md](docs/APP.md)
- Docker configuration in [DOCKER.md](docs/DOCKER.md)
- Testing examples in [TESTING.md](docs/TESTING.md)