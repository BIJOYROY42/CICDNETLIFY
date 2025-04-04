# React CI/CD App

This project is a simple React application that displays the user's name on the web page. It is set up with Continuous Integration and Continuous Deployment (CI/CD) using Jenkins and Netlify.

## Project Structure

The project consists of the following main directories and files:

- **public/**: Contains static files for the application.
  - `favicon.ico`: The favicon for the web application.
  - `index.html`: The main HTML file that serves as the entry point for the React application.
  - `manifest.json`: Provides metadata about the application, including its name, icons, and theme colors.
  - `robots.txt`: Controls how search engines index the site.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components.
    - `App.js`: The main React component that displays the user's name.
    - `App.test.js`: Unit tests for the App component.
  - `index.js`: The entry point for the React application, rendering the App component into the DOM.
  - **styles/**: Contains CSS styles for the application.
    - `App.css`: CSS styles for the App component.

- **.gitignore**: Specifies files and directories that should be ignored by Git.

- **Jenkinsfile**: Contains the pipeline configuration for Jenkins, including build and test stages.

- **netlify.toml**: Configuration settings for deploying the application to Netlify.

- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

- **jest.config.js**: Configuration settings for Jest, the testing framework used for unit tests.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/BIJOYROY42/react-cicd-app.git
   ```

2. Navigate to the project directory:
   ```
   cd react-cicd-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

5. Run tests:
   ```
   npm test
   ```

## Usage

Open your web browser and go to `http://localhost:3000` to view the application. You should see your name displayed on the web page.

## CI/CD Pipeline

The project is integrated with Jenkins for CI/CD. The Jenkinsfile defines the build and test stages, and the application is deployed to Netlify upon successful builds.

## License

This project is licensed under the MIT License.