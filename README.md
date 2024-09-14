# Employee Management System (React + NestJS)

This project is an **Employee Management System** built using **React** for the frontend and **NestJS** for the backend. The application allows users to log in, sign up, and view a list of employees. The project also implements JWT authentication and Redis for caching.

## Features

- **Login & Signup**
  - Users can sign up and log in using their credentials.
  - JWT-based authentication is used for secure access.
  
- **Employee Management**
  - View a list of employees with details such as name, status, designation, department, and role.
  
- **Frontend**
  - Built with **React** and **Tailwind CSS** for a responsive and modern UI.
  
- **Backend**
  - Developed using **NestJS** with JWT-based authentication and Redis for caching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend (NestJS)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/employee-management.git

2. Navigate to the backend folder:

   ```bash
   cd auth-project_backend

3. Install the required dependencies:

  ```bash
   npm install

4. Run the backend server:

```bash
   npm run start

### Frontend (React)


1. Navigate to the frontend folder:

   ```bash
   cd auth-project_frontend

2. Install the required dependencies:

  ```bash
   npm install

3. Run the frontend server:

```bash
   npm run dev

4. Click the link in the terminal and navigate to the browser.

## Usage

### Login & Signup

- **Login Page:** Users can access the login page by navigating to `http://localhost:3000/login`. 
  - To log in, enter your username and password and click the "Sign In" button.

- **Signup Page:** Users can access the signup page by navigating to `http://localhost:3000/signup`.
  - To sign up, fill out the required fields (name, email, username, and password) and click the "Sign Up" button.

### Employee List

- **Employee List Page:** After logging in, you can view the list of employees at `http://localhost:3000/employee`.
  - This page displays a list of employees with details such as name, status, designation, department, and role.
  - You can filter the employee list by name, designation, and department, and navigate through pages using the pagination controls.

## Technologies

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making requests.
- **React Router**: A library for routing in React applications.

### Backend:
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **JWT (JSON Web Token)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Redis**: An in-memory data structure store used as a cache.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Screenshots

### Login Page
<img width="974" alt="image" src="https://github.com/user-attachments/assets/8c7327ff-b19a-4664-997b-f06d663d20b8">

### Employee List Page
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/4fa1ecd8-b82d-4908-ae2b-8306aa1ac9eb">

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make a pull request with clear, detailed descriptions of your changes.
