# Google Sign In (React + Express)

## About
This project was created in order to learn how to create '*Sign In With Google*' button. This repository contains both **Frontend** and **Backend**, since my main purpose is being able to integrate '*Sign In With Google*' buttons in custom backends.
### Also, this project was used so I could understand further the concepts of **Redux** and **Prisma ORM**

---
## Technologies Used in This Project
- Frontend
  - React.js (Boilerplated with **Vite**)
  - Typescript
  - Redux (Redux Toolkit)
  - Firebase
  - Axios
  - React Router Dom

- Backend
  - Express.js
  - Prisma
  - Firebase
  - JsonWebToken

---
## How to run Locally

1. Clone this repository locally <br />
  `git clone https://github.com/tsuyusk/google-sign-in`

2. Install dependencies in both backend and frontend <br />
  `cd frontend && yarn` <br />
  `cd ..` <br />
  `cd backend && yarn`

3. Create a .env file in `./backend` and `./frontend` files, filling it with the data required in `.env.example` files

4. Run the project <br />
  `cd frontend && yarn dev` <br />
  `cd backend && yarn dev`