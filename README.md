# Todo Application Infrastructure

An infrastructure setup for Todo application using modern DevOps practices with Ansible, Docker, and GitHub Actions.

## Infrastructure Overview

- **Configuration Management**: Ansible
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Database**: PostgreSQL 16
- **Reverse Proxy**: Nginx
- **Security**: UFW, Fail2ban
- **Monitoring**: Docker built-in healthchecks

## Prerequisites

- Ansible 2.9+
- Docker 24.0+
- Docker Compose V2
- Ubuntu 20.04+ target server
- Node.js 22+ (for local development)


## Setup

1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

2. Copy example files and configure:

```bash
cp .env.example .env
cp inventory/hosts-example.yml inventory/hosts.yml
cp group_vars/all-example.yml group_vars/all.yml
```

3. Configure secrets in GitHub repository

- `SSH_PRIVATE_KEY`: SSH private key for server access
- `SSH_HOST`: Target server hostname/IP
- `JWT_SECRET`: JWT secret key
- `SNYK_TOKEN`: Snyk API token
- `TEST_DATABASE_URL`: Test database URL
- `PROD_DATABASE_URL`: Production database URL

4.Deployment

```bash
ansible-playbook site.yml -i inventory/hosts.yml
```


# Security Notes

- Never commit `.env` files
- Keep secrets in GitHub repository secrets
- Regularly update dependencies
- Monitor security alerts


## Thanks to

The project is based on the tutorial of Smoljames', in addition to the ansible and terraform setup, CI/CD pipeline, security, and some other improvements.