# Ecommerce MERN Stack Project

This repository contains a full-fledged E-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). The project is divided into three main parts: the frontend (React), the backend (Node.js/Express), and the admin panel.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/harshrathore2164/E-CommerceMernStack.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd E-CommerceMernStack
    ```

3. **Install dependencies for each part of the project**

    #### Backend

    ```bash
    cd backend
    npm install
    ```

    #### Frontend

    ```bash
    cd ../frontend
    npm install
    ```

    #### Admin Panel

    ```bash
    cd ../admin
    npm install
    ```

### Running the Application

1. **Run the backend**

    Before running the backend, you need to create a MongoDB cluster on MongoDB Atlas. Enter your MongoDB Atlas username and password in the `index.js` file in the backend folder at the following line:

    ```javascript
    mongoose.connect("mongodb+srv://<username>:<password>@cluster0.00anfsr.mongodb.net/ecommerce")
    ```

    Then, to start the backend server, use:

    ```bash
    nodemon index.js
    ```

    This will start the backend server .

2. **Run the frontend**

    Open another terminal window and navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    npm start
    ```

    This will start the React application on `http://localhost:4000` , you can change the port number yourself.

3. **Run the admin panel**

    Open another terminal window and navigate to the `admin` directory:

    ```bash
    cd ../admin
    npm run dev
    ```

    This will start the admin panel on `http://localhost:3001`.

### Project Structure

Here is an overview of the project structure:



### Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. We welcome all contributions.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
