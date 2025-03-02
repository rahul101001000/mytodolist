# Development Requirements

## Software Requirements

### 1. Node.js and NPM
- **Required Version**: Node.js 18+ and npm 9+
- **Installation**: 
  - Download Node.js from [nodejs.org](https://nodejs.org/) (npm comes bundled with Node.js)
  - Or use nvm (Node Version Manager):
    ```bash
    # Windows
    winget install CoreyButler.NVMforWindows
    nvm install latest
    nvm use latest
    
    # Unix/macOS
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    nvm install node # installs latest version
    ```
- **Verify Installation**:
  ```bash
  node --version  # Should show v18+ 
  npm --version   # Should show v9+
  ```
- **Update npm** (if needed):
  ```bash
  npm install -g npm@latest
  ```

### 2. Git
- **Required Version**: 2.x+
- **Installation**: 
  - Windows: Download from [git-scm.com](https://git-scm.com/)
  - macOS: `brew install git`
  - Linux: `sudo apt-get install git`
- **Verify Installation**:
  ```bash
  git --version
  ```
- **Initial Setup**:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### 3. VS Code Insiders
- **Purpose**: Enhanced development experience with latest features
- **Installation**: 
  - Download from [code.visualstudio.com/insiders](https://code.visualstudio.com/insiders)
  - Or through winget: `winget install Microsoft.VisualStudioCode.Insiders`
- **Verify Installation**:
  - Command Palette should show "Code - Insiders"
  - Or check through: `code-insiders --version`

### 4. GitHub CLI (gh)
- **Required Version**: Latest
- **Installation**:
  - Windows: `winget install GitHub.cli`
  - macOS: `brew install gh`
  - Linux: `sudo apt install gh`
- **Verify Installation**:
  ```bash
  gh --version
  ```
- **Authentication**:
  ```bash
  gh auth login
  # Follow prompts to authenticate with GitHub
  ```

### 5. Docker Desktop
- **Required Version**: Latest
- **Installation**: 
  - Download from [docker.com](https://www.docker.com/products/docker-desktop)
  - Or through winget: `winget install Docker.DockerDesktop`
- **Verify Installation**:
  ```bash
  docker --version
  docker-compose --version
  ```

### 6. NPX
- **Description**: Comes bundled with npm 5.2+
- **Usage**: Executes packages without installing them globally
- **Verify Installation**:
  ```bash
  npx --version
  ```
- **Update** (updates with npm):
  ```bash
  npm install -g npm@latest  # This also updates npx
  ```

## Authentication Requirements

### 1. GitHub Repository Setup
1. Create a new repository on GitHub
2. Note the repository URL
3. Initialize locally:
   ```bash
   git init
   git remote add origin <repository-url>
   ```

### 2. GitHub Personal Access Token (PAT)
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Select scopes:
   - repo (all)
   - workflow
   - read:org
4. Copy and store token securely
5. Use token when prompted for password in git operations

### 3. Docker Hub Account (optional)
- Required only if pushing images to Docker Hub
- Create account at [hub.docker.com](https://hub.docker.com)
- Login through Docker Desktop or CLI:
  ```bash
  docker login
  ```

## VS Code Extensions

### Required Extensions
1. **Docker**
   - ID: ms-azuretools.vscode-docker
   - Purpose: Docker integration and management

2. **GitLens**
   - ID: eamodio.gitlens
   - Purpose: Enhanced Git capabilities

3. **ESLint**
   - ID: dbaeumer.vscode-eslint
   - Purpose: JavaScript/TypeScript linting

4. **Jest**
   - ID: Orta.vscode-jest
   - Purpose: Jest test integration

### Installation Command
```bash
code-insiders --install-extension ms-azuretools.vscode-docker
code-insiders --install-extension eamodio.gitlens
code-insiders --install-extension dbaeumer.vscode-eslint
code-insiders --install-extension Orta.vscode-jest
```

## Environment Setup

### 1. Node.js Environment
- Install required packages:
  ```bash
  npm install
  ```
- Verify package installation:
  ```bash
  npm list --depth=0
  ```

### 2. Docker Environment
- Start Docker Desktop
- Verify Docker daemon is running:
  ```bash
  docker info
  ```

### 3. Development Environment Variables
Create `.env` file with:
```env
PORT=3000
NODE_ENV=development
```

## Troubleshooting Common Issues

### 1. Git Authentication
If git push fails:
- Verify remote URL: `git remote -v`
- Check git credentials: `git config --list`
- Use PAT instead of password

### 2. Docker Issues
- Ensure Docker Desktop is running
- Check available ports: `netstat -ano | findstr :3000`
- Reset Docker Desktop if needed

### 3. Node.js/NPM Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules`
- Reinstall packages: `npm install`

### 4. GitHub CLI (gh) Issues
- Re-authenticate: `gh auth login`
- Check auth status: `gh auth status`
- Verify repo access: `gh repo view`

## Updating Tools

### Regular Updates
```bash
# Node.js (via nvm if installed)
nvm install latest

# npm
npm install -g npm@latest

# GitHub CLI
gh update

# VS Code Insiders
# Auto-updates by default

# Docker Desktop
# Auto-updates by default, can be managed through settings
```

## Additional Notes

### Port Requirements
- Default ports used:
  - 3000: Express server
  - 5173: Vite dev server (if implemented)
  - 9229: Node.js debugger

### Security Considerations
- Keep PATs secure and rotate regularly
- Use .gitignore for sensitive files
- Configure CORS properly
- Use environment variables for secrets

### Workspace Setup
- Use consistent line endings (Git config)
- Configure editor settings (spaces vs tabs)
- Set up linting and formatting rules