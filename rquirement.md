Create a full-stack web application called Task Manager Lite using python for the backend and React (with Yarn) for the frontend.

🔧 Backend (python):

Use python to create a RESTful API

Define a Task entity with:

id: Long

title: String

completed: Boolean

Implement full CRUD functionality:

Add new tasks

Get all tasks

Mark tasks as done (update completed)

Delete tasks

Use an in-memory (system memory as database)

Run backend on port 8080

Enable CORS for http://localhost:3000

🎯 Frontend (React using Yarn):

Use React (functional components + hooks)

Use Yarn for package installation and management (not npm)

Create a simple interface with:

A form to add new tasks

A list to display all tasks

Each task should include:

A checkbox to mark it as completed

A delete button to remove the task

Use Axios or fetch() to call the backend API

Manage component state using useState and useEffect

Run frontend on port 3000

📦 Additional Instructions:

Frontend setup should use:

yarn create react-app task-manager-frontend
cd task-manager-frontend
yarn add axios


Include a README.md with clear setup and run instructions for both frontend and backend

Optionally add basic UI styling using Bootstrap or Tailwind CSS