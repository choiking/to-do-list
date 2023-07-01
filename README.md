# Todo List Web Application

This is a simple web application that allows users to manage a to-do list of duties. The application consists of a backend API built with Node.js and TypeScript, and a frontend UI built with React.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- Node.js
- PostgreSQL

## Backend Setup

1. Clone the repository:
```shell
git clone <repository-url>
cd todo-app-backend
```
2. Install the dependencies:
```shell
npm install
```
3. Create a PostgreSQL database call todo_app for the application

4. update 
```shell
postgres://user:password@localhost:5432/todo_app
```
to be your credentials

5. Start the backend server:
```shell
npm start
```
The backend server should now be running on http://localhost:3000.

## Frontend Setup
1. Open a new terminal window.

2. Navigate to the frontend directory:
```shell
cd ../todo-app-frontend
```
3. Install the dependencies:
```shell
npm install
```
4. Start the frontend development server:
```shell
npm start
```
The frontend development server should now be running on http://localhost:3001

## Running Tests

Backend Tests
To run the backend tests, navigate to the todo-app-backend directory and run the following command:
```shell
npm test
```

Frontend Tests
To run the frontend tests, navigate to the todo-app-frontend directory and run the following command:
```shell
npm test
```
Production Build
To build the production version of the frontend application, navigate to the todo-app-frontend directory and run the following command:

npm run build
The optimized and minified production build will be available in the build directory.

Please note that you may need to update the instructions according to your specific project structure and configuration.
