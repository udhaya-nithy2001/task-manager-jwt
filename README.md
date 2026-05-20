# Task Manager JWT 🎯

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![Django](https://img.shields.io/badge/Django-REST_Framework-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

A scalable full stack task management application built using Django REST Framework (DRF) and JWT Authentication.

This project demonstrates secure backend API development, authentication, role-based access control, frontend integration, and RESTful architecture.

---

# 📚 Table of Contents

- Features
- Tech Stack
- Project Structure
- API Endpoints
- RBAC
- Setup Instructions
- Frontend Setup
- Screenshots
- Security Features
- Scalability Notes
- Future Improvements
- Author

---

# ✨ Features

## 🔐 Authentication & Security

- User Registration API
- JWT Authentication (Access & Refresh Tokens)
- Password Hashing
- Protected API Routes
- Role-Based Access Control (Admin/User)

---

## 📝 Task Management APIs

- Create Tasks
- Retrieve Tasks
- Update Tasks
- Delete Tasks
- Task Filtering
- User-specific task isolation

---

## 🎨 Frontend

- Login UI
- Create Task UI
- Dynamic Task Loading
- API Integration using Fetch API
- JWT Token Storage using localStorage

---

## 📄 API Documentation

- Swagger/OpenAPI Documentation
- Interactive API Testing

Swagger URL:

```bash
http://127.0.0.1:8000/api/docs/
```

---

# 🛠️ Tech Stack

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

# 📁 Project Structure

```bash
task-manager-jwt/
│
├── accounts/
├── tasks/
├── frontend/
├── screenshots/
├── primetrade_backend/
├── .env.example
├── .gitignore
├── manage.py
├── requirements.txt
└── README.md
```

---

# 📡 API Endpoints

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

# 🔐 Role-Based Access Control (RBAC)

## Admin

- Can access all tasks
- Can manage all users' tasks

## Normal User

- Can access only their own tasks
- Cannot access other users' data

---

# 🚀 Setup Instructions

## Clone Repository

```bash
git clone https://github.com/udhaya-nithy2001/task-manager-jwt.git
```

---

## Navigate To Project

```bash
cd task-manager-jwt
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Apply Migrations

```bash
python manage.py migrate
```

---

## Run Server

```bash
python manage.py runserver
```

Server runs at:

```bash
http://127.0.0.1:8000/
```

---

# 🎨 Frontend Setup

Open:

```bash
frontend/index.html
```

in browser

OR use:

```bash
Open with Live Server
```

in VS Code.

---

# 📸 Screenshots

## Frontend UI

![Frontend UI](./screenshots/frontend-ui.png)

---

## Swagger API Docs

![Swagger Docs](./screenshots/swagger-docs.png)

---

# 🛡️ Security Features

- JWT-based Authentication
- Password Hashing using Django Authentication System
- Protected APIs using DRF Permissions
- Role-Based Access Control
- User Data Isolation
- Environment Variable Support
- Input Validation

---

# 📈 Scalability Notes

This project follows a modular and scalable architecture using Django REST Framework.

Scalability considerations:

- JWT-based stateless authentication
- Modular apps structure
- Reusable serializers and viewsets
- Role-based access control
- API-first architecture
- Ready for PostgreSQL migration
- Swagger/OpenAPI documentation support

Future scalability improvements:

- Redis caching
- Docker deployment
- Load balancing
- Celery background jobs
- CI/CD pipelines

---

# 🚀 Future Improvements

- Docker Deployment
- PostgreSQL Integration
- Redis Caching
- Pagination
- Advanced Permissions
- Production Deployment
- Search & Filtering Improvements

---

# 👨‍💻 Author

## Udhayanithy S

- GitHub: https://github.com/udhaya-nithy2001
- Repository: https://github.com/udhaya-nithy2001/task-manager-jwt
- Location: Chennai, Tamil Nadu, India

---

# ⭐ Project Status

✅ Completed  
✅ Functional  
✅ Internship Assignment Ready  
✅ Backend + Frontend Integrated

---

# 📄 License

This project is created for educational and internship assignment purposes.