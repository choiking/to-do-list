# Todo List Web Application

This is a simple web application that allows users to manage a to-do list of duties. The application consists of a backend API built with Node.js and TypeScript, and a frontend UI built with React.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- Node.js
- PostgreSQL

## Database Setup

Install PostgreSQL on your system if you haven't already. You can download it from the official PostgreSQL website: https://www.postgresql.org/download/

Once PostgreSQL is installed, open a terminal or command prompt and start the PostgreSQL service.

Access the PostgreSQL command-line interface (CLI) by running the following command:

```shell
psql
```
In the PostgreSQL CLI, create a new database for your project by running the following command:

```shell
CREATE DATABASE todo_app;
```
This will create a new database named "todo_app".

Connect to the newly created database by running the following command:

```shell
\c todo_app
```
Now, you can create the "duties" table by executing the following SQL query:

```sql
CREATE TABLE duties (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```
This will create a table named "duties" with three columns: "id" as a primary key, "title" as a string (maximum 255 characters), and "created_at" as a timestamp with time zone.


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
3. open Postgresql and make sure it is running

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
