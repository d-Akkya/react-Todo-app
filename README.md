# React Todo App

React Todo App is a simple yet powerful task management application built using React. This application allows users to add, edit, delete and mark tasks as complete. The todos are stored in the browser's local storage, ensuring the data persists even after the browser is restarted.

## 🌟 Features

- 📌 **Add Todos**: Quickly add new tasks to your list.
- ✏️ **Edit Todos**: Modify tasks as needed.
- ❌ **Delete Todos**: Remove tasks when they are no longer required.
- ✅ **Mark Complete**: Keep track of completed tasks.
- 💾 **Persistent Data**: Todos are saved in the browser's local storage, so you won't lose them even after refreshing or restarting the browser.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your system:

- 🟢 **Node.js** (v16 or later)
- 📦 **npm** (v8 or later)

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/d-Akkya/react-Todo-app.git
```

### 2. Navigate to the Project Directory

```bash
cd react-todo-app
```

### 3. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

### 4. Start the Development Server

Launch the application in development mode:

```bash
npm start
```

The app will open in your default browser at `http://localhost:3000`.

## 📂 Project Structure

Below is an overview of the project's folder structure:

```
react-todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoList.js
│   │   └── TodoItem.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── ...
```

## 💾 Local Storage Integration

The application leverages local storage to persist todos. Key implementation steps include:

1. **Fetching Data from Local Storage**: On application load, todos are retrieved from local storage using:
   ```js
   const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
   ```

2. **Saving Data to Local Storage**: Every time a todo is added, edited, or deleted, the updated list is stored in local storage:
   ```js
   localStorage.setItem('todos', JSON.stringify(todos));
   ```

3. **React State Management**: The state of todos is managed using React's `useState` and `useEffect` hooks:
   ```js
   const [todos, setTodos] = useState(savedTodos);

   useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);
   ```

## 🌍 Deployment

To deploy the app, build the production-ready files:

```bash
npm run build
```

The `build/` directory contains the optimized app, ready for deployment on platforms like Netlify, Vercel, or any static hosting service.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. 🍴 Fork the repository.
2. 🌟 Create a feature branch: `git checkout -b feature-name`
3. 🔨 Commit your changes: `git commit -m 'Add feature-name'`
4. 📤 Push to the branch: `git push origin feature-name`
5. 📨 Open a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Built with [React](https://reactjs.org/)
- Inspired by task management tools

Enjoy using React Todo App! If you have any feedback, feel free to open an issue or contribute to the project.
