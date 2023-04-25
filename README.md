# NODEJS and ExpressJS Friends List API

This is a simple Node.js and Express application that provides endpoints to create, retrieve, update, and delete friends from a list.

## Prerequisites

- Node.js installed on your local machine
- NPM (Node Package Manager) installed on your local machine
- Git installed on your local machine
- Any web browser installed on your local machine

## Installation

1. Clone the repository to your local machine using the following command:

    ```
    git clone https://github.com/invincibleRD/ExpressJS.git
    ```

2. Navigate to the project directory and install the required dependencies using the following command:

    ```
    npm install
    ```

## Usage

To start the application, navigate to the project directory and run the following command:

    
    npm start
    
    

This will start the Node.js server and the application will be available at http://localhost:3000.

The following API endpoints are available in the application:

- GET /friends: Retrieves the list of all friends.
- GET /friends/:friendID: Retrieves the friend with the specified ID.
- POST /friends: Adds a new friend to the list.
- PUT /friends/:friendID: Updates the friend with the specified ID.
- DELETE /friends/:friendID: Deletes the friend with the specified ID.

You can test the API endpoints using any HTTP client like Postman, cURL, or any web browser. The base URL for all endpoints is http://localhost:3000.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
