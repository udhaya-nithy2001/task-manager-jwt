# Task Manager JWT

A full stack task management application built using Django REST Framework and JWT Authentication.

## Features

- User Registration
- JWT Login Authentication
- Protected APIs
- Task CRUD Operations
- Task Filtering
- Swagger API Documentation
- Frontend Integration using HTML, CSS, JavaScript

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- SimpleJWT

### Frontend
- HTML
- CSS
- JavaScript

## API Endpoints

### Authentication

POST /api/auth/register/

POST /api/login/

POST /api/token/refresh/

### Tasks

GET /api/tasks/

POST /api/tasks/

PUT /api/tasks/{id}/

DELETE /api/tasks/{id}/

## Swagger Documentation

/api/docs/

## Setup Instructions

### Clone Repository

git clone https://github.com/udhaya-nithy2001/task-manager-jwt.git

### Install Dependencies

pip install -r requirements.txt

### Run Server

python manage.py runserver

## Frontend

Open frontend/index.html in browser.

## Author

Udhayanithy S