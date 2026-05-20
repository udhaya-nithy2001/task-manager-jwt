# Task Manager JWT

A scalable full stack task management application built using Django REST Framework (DRF) and JWT Authentication.

This project demonstrates secure backend API development, authentication, role-based access control, frontend integration, and RESTful architecture.

---

# Features

## Authentication & Security
- User Registration API
- JWT Authentication (Access & Refresh Tokens)
- Password Hashing
- Protected API Routes
- Role-Based Access Control (Admin/User)

---

## Task Management APIs
- Create Tasks
- Retrieve Tasks
- Update Tasks
- Delete Tasks
- Task Filtering
- User-specific task isolation

---

## Frontend
- Login UI
- Create Task UI
- Dynamic Task Loading
- API Integration using Fetch API
- JWT Token Storage using localStorage

---

## API Documentation
- Swagger/OpenAPI Documentation
- Interactive API Testing

Swagger URL:
```bash
http://127.0.0.1:8000/api/docs/
```

---

# Tech Stack

## Backend
- Python
- Django
- Django REST Framework
- SimpleJWT

## Frontend
- HTML
- CSS
- JavaScript

## Database
- SQLite

---

# Project Structure

```bash
task-manager-jwt/
│
├── accounts/
├── tasks/
├── frontend/
├── primetrade_backend/
├── manage.py
├── requirements.txt
└── README.md
```

---

# API Endpoints

## Authentication APIs

### Register User
```http
POST /api/auth/register/
```

### Login User
```http
POST /api/login/
```

### Refresh Token
```http
POST /api/token/refresh/
```

---

## Task APIs

### Get Tasks
```http
GET /api/tasks/
```

### Create Task
```http
POST /api/tasks/
```

### Update Task
```http
PUT /api/tasks/{id}/
```

### Delete Task
```http
DELETE /api/tasks/{id}/
```

---

# Role-Based Access Control (RBAC)

## Admin
- Can access all tasks

## Normal User
- Can access only their own tasks

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/udhaya-nithy2001/task-manager-jwt.git
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Server

```bash
python manage.py runserver
```

---

# Frontend Setup

Open:

```bash
frontend/index.html
```

in browser or run using VS Code Live Server.

---

# Future Improvements
- Docker Deployment
- PostgreSQL Integration
- Redis Caching
- CI/CD Pipeline
- Pagination
- Advanced Permissions
- Production Deployment

---
# Screenshots

## Frontend UI

![Frontend UI](./screenshots/frontend-ui.png)

## Swagger API Docs

![Swagger Docs](./screenshots/swagger-docs.png)


# Author

Udhayanithy S

GitHub:
https://github.com/udhaya-nithy2001