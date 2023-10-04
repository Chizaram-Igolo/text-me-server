# Text-Me: Apollo Server with Mongoose

This project is an Apollo Server implementation with Mongoose, designed to provide various user authentication and book management features. It is equipped with user registration, authentication, password management, and CRUD operations for books.

This is the server that serves the client project at https://github.com/Chizaram-Igolo/text-me.git

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [User Authentication](#user-authentication)
  - [Register New User](#register-new-user)
  - [Sign In User](#sign-in-user)
  - [Handle Forgotten Password](#handle-forgotten-password)
  - [User Token Management and Verification](#user-token-management-and-verification)
- [Book Management](#book-management)
  - [Create Books](#create-books)
  - [Read Books](#read-books)
  - [Update Books](#update-books)
  - [Delete Books](#delete-books)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB set up and running.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Chizaram-Igolo/text-me-server.git
   ```

2. Navigate to the project directory:

   ```shell
   cd text-me-server
   ```

3. Install dependencies:

   ```shell
   npm i
   ```

4. Start the server:

   ```shell
   npm run start
   ```

Your Apollo Server should now be running at http://localhost:4000.

### User Authentication

#### Register New User

To register a new user, send a POST request to http://localhost:4000/ with a GraphQL mutation.

#### Sign In User

To sign in a user, send a POST request to http://localhost:4000/ with a GraphQL mutation.

#### Handle Forgotten Password

To handle forgotten passwords, follow the password reset instructions provided in the application's UI.

#### User Token Management and Verification

User tokens are managed automatically upon successful authentication. Token verification is implemented using JWT.

### Book Management

#### Create Books

To create a new book, send a POST request to http://localhost:4000/ with a GraphQL mutation.

#### Read Books

To retrieve books, send a POST or GET request to http://localhost:4000/ with a GraphQL query.

#### Update Books

To update a book, send a POST request to http://localhost:4000/ with a GraphQL mutation.

#### Delete Books

To delete a book, send a POST request to http://localhost:4000/ with a GraphQL mutation.

### Contributing

Contributions are welcome! Please feel free to submit a pull request.

### License

This project is licensed under the MIT License.
