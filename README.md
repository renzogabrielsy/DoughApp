# Dough - Personal Finance Tracker App 🍩

## Overview
Dough is a personal finance tracker application designed specifically for Filipinos. It allows users to manage accounts, transactions, and much more.

## Technologies Used 🛠️
- Frontend: Next.JS, TypeScript, TailwindCSS, Shadcn/ui
- Backend: Express, MongoDB

## Directory Structure 📂

- **DoughApp** (Root for the full stack project)
  - **dough-frontend** (Root for the frontend)
    - *Details about important frontend directories or files go here*
  - **dough-backend** (Root for the backend)
    - *Details about important backend directories or files go here*

## Getting Started 🚀

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/DoughApp.git
    ```

2. **Install MongoDB**
    - Download and install MongoDB from [here](https://www.mongodb.com/try/download/community) if you haven't.
    - Run your MongoDB instance.
  
3. **Navigate to `dough-backend` and install backend dependencies**
    ```bash
    cd DoughApp/dough-backend
    npm install
    ```

4. **Run the seeding script to populate MongoDB**
    ```bash
    npm run seed
    ```

5. **Navigate to `dough-frontend` and install frontend dependencies**
    ```bash
    cd ../dough-frontend
    npm install
    ```

6. **Start the Development Servers**
    ```bash
    # Start the backend server
    cd ../dough-backend
    node index.js
    
    # In a new terminal, start the frontend development server
    cd ../dough-frontend
    npm run dev
    ```

---

Feel free to add this to your existing README file.
## Contribution Guidelines 🤝

*Details for how to contribute to the project.*
