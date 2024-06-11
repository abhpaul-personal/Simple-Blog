# Simple Blog

## Project Description

The Simple Blog project is a web application built using Node.js, Express.js, and EJS. The application allows users to create, view, edit, and delete blog posts. Posts will not persist between sessions as no database is used in this version of the application. Styling is implemented using CSS and Bootstrap to ensure a good user experience.

## Features

- **Post Creation**: Users can create new posts.
- **Post Viewing**: The home page displays all posts, and users can view individual posts.
- **Post Update/Delete**: Users can edit and delete existing posts.
- **Responsive Design**: The application is well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/simple-blog.git
    cd simple-blog
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the server**:
    ```bash
    node app.js
    ```

4. **Access the application**:
    Open your browser and go to `http://localhost:3000`.

## Dependencies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating engine
- **Body-Parser**: Middleware to parse incoming request bodies

## Project Requirements

Refer to the [Product Requirements Document](Product%20Requirements%20Document.docx) for detailed requirements and wireframes.

## Best Practices and Recommendations

- **Security**:
  - Sanitize user inputs to prevent XSS attacks.
  - Implement CSRF protection for form submissions.

- **Validation**:
  - Ensure server-side validation of form inputs.
  - Add client-side validation for better user experience.

- **Error Handling**:
  - Implement comprehensive error handling for all routes.
  - Provide user-friendly error messages.

- **Documentation**:
  - Add comments to the code to improve readability and maintainability.

- **Testing**:
  - Write unit tests for key functionalities to ensure the application works as expected.
  - Perform manual testing to verify that all features work correctly across different browsers and devices.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## Contact
For any questions or inquiries, please contact [abhpaul@gmail.com](mailto:abhpaul@gmail.com).
