# padook

**Padel court booking manager**

Personal project for portfolio and learning purposes, built with Domain-Driven Design (DDD), Hexagonal Architecture, and NestJS.

---

## MVP Features

- JWT authentication (users and admins)
- Club and court management
- Bookings and cancellations
- User and admin panels
- Infrastructure with Docker, PostgreSQL, and RabbitMQ

---

## Tech Stack

- Node.js + TypeScript + NestJS
- PostgreSQL
- RabbitMQ
- Docker Compose

---

## About the project

**padook** is a platform to manage bookings for padel courts.  
It is designed to showcase professional backend architecture, following DDD and Hexagonal Architecture principles, and is fully containerized for easy development and deployment.

---

## How to run (development)

```bash
# Clone this repository
git clone https://github.com/<your-username>/padook.git
cd padook

# Start the development environment (requires Docker)
docker-compose up --build
