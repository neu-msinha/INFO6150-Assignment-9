# Assignment - 9: React Job Portal with Material UI and Axios

## Project Overview

This project is a Job Portal built using **React**, **Material UI** (optional), and **Axios**. The goal of this portal is to provide a user-friendly interface where job seekers can explore job listings and company profiles. The project includes front-end development, session management, and dynamic content rendering.

This assignment connects with a previous Node.js backend assignment to implement login functionality. The project follows a REST API folder structure, adhering to best practices in routing, controller, service, and model layers.

## Project Structure

```
project-root
├── client
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── About
│   │   │   ├── CompanyShowcase
│   │   │   ├── Contact
│   │   │   ├── Home
│   │   │   ├── JobListings
│   │   │   ├── Login
│   │   │   ├── Logout
│   │   │   ├── Register
│   │   ├── services
│   │       ├── App.js
│   │       ├── index.js
│   │       ├── jobPosts.js
│   ├── package-lock.json
│   ├── package.json
└── server
    ├── controllers
    │   ├── authController.js
    │   ├── userController.js
    ├── images
    ├── models
    │   ├── Company.js
    │   ├── User.js
    ├── routes
    │   ├── authRoutes.js
    │   ├── companyRoutes.js
    │   ├── userRoutes.js
    ├── services
    │   ├── authService.js
    ├── server.js
    ├── package-lock.json
    ├── package.json
    └── .gitignore
```

## Features

### 1. **Login and Session Management**

- Implemented a login page using stored usernames and passwords for authentication.
- Utilizes **Axios** for API calls to authenticate users and manage session states.
- Includes a logout feature to securely end user sessions.

### 2. **Job Portal Pages and Routing**

- Developed 5 main pages using **React components** and **react-router** for navigation:
  - **Home**
  - **About**
  - **Job Listings**
  - **Contact**
  - **Company Showcase**
- Follows a separate folder structure for every component for modularity.

### 3. **Job Listings with Frontend Data**

- Dynamically lists job positions on the Job Listings page.
- Each listing includes job role, required skills, and salary.
- Manages data within the frontend to handle the dynamic listing of jobs using `jobPosts.js`.

### 4. **Company Showcase with Image Gallery**

- Displays a gallery of company images with corresponding names on the Company Showcase page.
- Images are sourced from a backend server through the endpoint `/company_images/image_name.png`.

### 5. **Material UI Components**

- Optionally integrated **Material UI** components across the portal for a consistent and responsive design.
- Utilizes Material UI's card component on each page to present information, dynamically generated using React's `map()` function.

## Additional API Endpoints (Added after last assignment)

### Auth Endpoints

- **`/auth/login`**: Handles user login using the credentials stored in the backend.

### Company Endpoints

- **`/companies`**: Retrieves a list of companies for the Company Showcase page.
- **`/company_images/image_name.png`**: Serves company images for the image gallery on the frontend.

## Sample Data for Job Listings

```javascript
const jobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description:
      'Join our dynamic team to work on cutting-edge technologies...',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    description: 'Elevate our digital marketing strategies...',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/digital-marketing-specialist',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Shape engaging user experiences...',
    lastUpdated: 'Last updated 4 hours ago',
    applyLink: 'https://example.com/apply/ux-ui-designer',
  },
  {
    id: 4,
    title: 'Data Scientist',
    description: 'Leverage advanced analytics and machine learning...',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
  },
  {
    id: 5,
    title: 'Customer Support Representative',
    description: 'Deliver unparalleled customer service and support...',
    lastUpdated: 'Last updated 6 hours ago',
    applyLink: 'https://example.com/apply/customer-support-representative',
  },
];
```

## Technical Requirements

- **Login and Session Management**: Uses Axios for API calls to authenticate users and manage session states. Only the login page is required; user data should be manually entered in the backend for testing purposes.
- **Job Listings and Company Showcase**: Dynamically lists job positions and company images. Job data is managed within the frontend, and company images are sourced from the backend.
- **Version Control**: All code is stored in a Git repository, with a `.gitignore` file to exclude `node_modules` and other non-essential files.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install Dependencies**

   ```bash
   # For client
   cd client
   npm install

   # For server
   cd ../server
   npm install
   ```

3. **Run the Server**

   ```bash
   # Make sure you are in the server directory
   npm start
   ```

4. **Run the Client**

   ```bash
   # Open a new terminal and navigate to the client directory
   npm start
   ```

5. **Testing the Login Functionality**
   - Use previously created usernames and passwords in the backend to log in on the frontend login page.

## Additional Notes

- **Material UI** usage is optional for this assignment but recommended for its UI components.
- **Axios** is used for API requests to ensure efficient communication between frontend and backend.
- Version control and documentation are essential; ensure all changes are committed to the Git repository.

## Resources

- [Axios Tutorial](https://www.youtube.com/watch?v=12l6lkW6JhE)
- [Material UI Documentation](https://mui.com/)
