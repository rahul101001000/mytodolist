# RFC-001: Separation of Frontend and Backend

## Status
- **Status**: Draft
- **Author**: GitHub Copilot
- **Created**: 2024-03-02

## Overview
This RFC proposes separating the current monolithic todo list application into distinct frontend and backend applications.

## Background
Currently, our application:
- Serves static files through Express
- Combines frontend and backend in single repository
- Uses direct file serving from root directory
- Has mixed development workflows

## Motivation

### 1. Development Efficiency
- Independent development of frontend and backend
- Different deployment lifecycles
- Separate scaling strategies

### 2. Security
- Better control over exposed files
- Proper CORS configuration
- Environment-specific configurations

### 3. Technology Independence
- Frontend can be hosted on CDN/static hosting
- Backend can be containerized separately
- Independent technology choices

## Proposed Changes

### 1. Repository Structure
```
mytodolist/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── style.css
│   ├── src/
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── tests/
│   │   └── server.test.js
│   ├── package.json
│   └── README.md
└── docs/
    ├── APP.md
    ├── DOCKER.md
    └── TESTING.md
```

### 2. Frontend Changes
- Create separate package.json
- Add development server (e.g., Vite/webpack)
- Move static files to public directory
- Configure API URL through environment variables
- Add build process
- Add frontend-specific Docker configuration

### 3. Backend Changes
- Remove static file serving
- Update CORS configuration
- Move to src directory structure
- Add proper API versioning (v1)
- Update Docker configuration
- Add health check endpoint

### 4. Development Workflow
- Separate npm scripts
- Independent version control
- Environment-specific configurations
- Development proxies

### 5. Deployment Changes
- Separate Docker builds
- Independent scaling
- Different hosting strategies possible
- Environment variable management

## Technical Details

### Frontend Updates
```javascript
// Environment configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

// API client abstraction
class TodoAPI {
    static async getTodos() { ... }
    static async addTodo(text) { ... }
    // ...
}
```

### Backend Updates
```javascript
// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// API versioning
app.use('/api/v1/todos', todosRouter);
```

## Migration Strategy

### Phase 1: Preparation
1. Create new directory structure
2. Set up frontend build process
3. Update backend API structure
4. Add environment configurations

### Phase 2: Implementation
1. Move frontend code
2. Update backend endpoints
3. Add API versioning
4. Update documentation

### Phase 3: Testing
1. Verify all endpoints
2. Test CORS configuration
3. Validate development workflow
4. Update test suite

### Phase 4: Deployment
1. Update Docker configurations
2. Test deployment process
3. Update CI/CD if applicable
4. Document new processes

## Risks and Mitigation

### Risks

#### 1. Development Complexity
- More configuration needed
- Two repositories to maintain
- Environment synchronization

#### 2. Deployment Overhead
- Multiple services to deploy
- Environment variable management
- CORS configuration

#### 3. Testing Complexity
- End-to-end testing more complex
- More integration points
- Environment management

### Mitigation

#### 1. Development
- Clear documentation
- Development scripts
- Local environment setup guide

#### 2. Deployment
- Docker Compose for local development
- Environment templates
- Deployment checklist

#### 3. Testing
- Updated test strategy
- Integration test suite
- Environment-specific configs

## Alternatives Considered

### 1. Monorepo with Workspaces
- **Pros**: Unified versioning, simpler deployment
- **Cons**: Less separation, coupled releases

### 2. Backend-Driven Frontend
- **Pros**: Simpler deployment, unified codebase
- **Cons**: Less flexibility, mixed concerns

### 3. Micro-frontends
- **Pros**: Maximum flexibility, independent scaling
- **Cons**: Too complex for current needs

## Success Metrics
1. Reduced deployment coupling
2. Independent scaling capability
3. Improved development velocity
4. Better security configuration
5. Cleaner codebase organization

## Timeline
- Phase 1: 1 day
- Phase 2: 2 days
- Phase 3: 1 day
- Phase 4: 1 day

**Total**: 5 days

## Questions for Discussion
1. Should we use a monorepo or separate repositories?
2. What build tool for frontend (Vite vs webpack)?
3. How to handle shared types/interfaces?
4. Development environment setup process?
5. CI/CD pipeline changes needed?