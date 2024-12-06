
  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

# NestJS Backend for User and Document Management

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Authentication APIs](#authentication-apis)
  - [User Management APIs](#user-management-apis)
  - [Document Management APIs](#document-management-apis)
  - [Ingestion Trigger API](#ingestion-trigger-api)
  - [Ingestion Management API](#ingestion-management-api)
- [Database Schema](#database-schema)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone  https://github.com/kashifjaveedij210/UserManagement

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Overview
This project is a backend service built using NestJS that provides functionality for managing users, documents, and ingestion processes. It includes user authentication with role-based access control, CRUD operations for documents, and APIs to trigger and manage ingestion processes.

## Features
- **Authentication**: Register, login, logout, and handle user roles (Admin, Editor, Viewer).
- **User Management**: Admin functionality to manage users, roles, and permissions.
- **Document Management**: CRUD operations for documents, including file uploads.
- **Ingestion Management**: APIs to trigger and track ingestion processes.

## Tech Stack
- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## API Endpoints

### Authentication APIs
| **Method** | **Endpoint**       | **Description**            |
|------------|--------------------|----------------------------|
| `POST`     | `/auth/register`   | Register a new user        |
| `POST`     | `/auth/login`      | Log in and receive a JWT   |
| `POST`     | `/auth/logout`     | Log out the user           |

### User Management APIs
| **Method** | **Endpoint**       | **Description**                         |
|------------|--------------------|-----------------------------------------|
| `GET`      | `/users`           | Get a list of all users (Admin only)    |
| `PATCH`    | `/users/:id`       | Update a user's role or permissions     |
| `DELETE`   | `/users/:id`       | Delete a user (Admin only)              |

### Document Management APIs
| **Method** | **Endpoint**       | **Description**                  |
|------------|--------------------|----------------------------------|
| `GET`      | `/documents`       | Retrieve all documents           |
| `POST`     | `/documents`       | Upload a new document            |
| `GET`      | `/documents/:id`   | Retrieve a document by ID        |
| `PATCH`    | `/documents/:id`   | Update a document's metadata     |
| `DELETE`   | `/documents/:id`   | Delete a document                |

### Ingestion Trigger API
| **Method** | **Endpoint**          | **Description**                               |
|------------|-----------------------|-----------------------------------------------|
| `POST`     | `/ingestion/trigger`  | Trigger ingestion in the Python backend       |

### Ingestion Management API
| **Method** | **Endpoint**       | **Description**                               |
|------------|--------------------|-----------------------------------------------|
| `GET`      | `/ingestion`       | Get the status of ongoing ingestion processes |
