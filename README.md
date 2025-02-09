# Todo Application Infrastructure

An infrastructure setup for a multi-container Node.js, Express, Prisma, and PostgreSQL todo application using modern DevOps practices with Ansible, Docker, and GitHub Actions.

## Features
- **Automated deployment** with Ansible.
- **Containerized application** using Docker and Docker Compose.
- **CI/CD pipeline** with GitHub Actions.
- **Secure and scalable infrastructure** with Nginx, UFW, and Fail2ban.
- **Database management** with PostgreSQL 16.
- **Built-in health monitoring** for containers.

## Project Structure
```
.
├── ansible.cfg
├── group_vars
│   ├── all-example.yml
├── inventory
│   ├── hosts-example.yml
├── README.md
├── roles
│   ├── application
│   │   ├── files
│   │   │   ├── Dockerfile
│   │   │   ├── package.json
│   │   │   ├── package-lock.json
│   │   │   ├── prisma
│   │   │   │   ├── migrations/
│   │   │   │   └── schema.prisma
│   │   │   ├── public
│   │   │   │   ├── fanta.css
│   │   │   │   ├── index.html
│   │   │   │   └── styles.css
│   │   │   ├── src
│   │   │   │   ├── middleware
│   │   │   │   │   └── authMiddleware.js
│   │   │   │   ├── prismaClient.js
│   │   │   │   ├── routes
│   │   │   │   │   ├── authRoutes.js
│   │   │   │   │   └── todoRoutes.js
│   │   │   │   └── server.js
│   │   │   └── todo-app.rest
│   │   ├── handlers
│   │   │   └── main.yml
│   │   ├── tasks
│   │   │   └── main.yml
│   │   └── templates
│   │       ├── docker-compose.yml.j2
│   │       ├── nginx.conf.j2
│   │       └── todo-app.service.j2
│   ├── common
│   │   └── tasks
│   │       └── main.yml
│   ├── docker
│   │   └── tasks
│   │       └── main.yml
│   └── security
│       ├── handlers
│       │   └── main.yml
│       ├── tasks
│       │   └── main.yml
│       └── templates
│           └── jail.local.j2
├── site.yml
```

## Infrastructure Overview
- **Configuration Management:** Ansible
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions
- **Database:** PostgreSQL 16
- **Reverse Proxy:** Nginx
- **Security:** UFW, Fail2ban
- **Monitoring:** Docker built-in health checks

## Prerequisites
Ensure the following tools and versions are installed before setting up and deploying the project:
- **Ansible:** 2.9+
- **Docker:** 24.0+
- **Docker Compose:** V2
- **Ubuntu:** 20.04+ (target server)
- **Node.js:** 22+ (for local development)

## Setup Instructions
### 1. Clone the repository
```sh
git clone <repository-url>
cd <repository-name>
```

### 2. Copy and configure example files
```sh
cp .env.example .env
cp inventory/hosts-example.yml inventory/hosts.yml
cp group_vars/all-example.yml group_vars/all.yml
```
- Edit the `.env` file to include your environment variables.
- Update `inventory/hosts.yml` with your target server details.
- Modify `group_vars/all.yml` to customize group variables.

### 3. Configure GitHub repository secrets
Add the following secrets to your GitHub repository for CI/CD:
- `SSH_PRIVATE_KEY`: SSH private key for server access.
- `SSH_HOST`: Target server hostname or IP address.

### 4. Deploy the application
Run the Ansible playbook to deploy the application:
```sh
ansible-playbook site.yml -i inventory/hosts.yml
```

## Security Notes
- **Do not commit sensitive files**: Avoid committing `.env` files or other sensitive information to version control.
- **Use GitHub Secrets**: Store sensitive data like SSH keys and environment variables securely in GitHub Secrets.
- **Update dependencies regularly**: Keep all dependencies up to date to avoid vulnerabilities.
- **Monitor security alerts**: Use tools like Dependabot or Snyk to monitor for vulnerabilities in your dependencies.

## Acknowledgments
This project is inspired by Smoljames' tutorial. Additional improvements include Ansible and Terraform setup, a CI/CD pipeline, enhanced security measures, and other optimizations.
