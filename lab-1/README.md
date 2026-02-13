# 📝 Bob Todo App

A modern, full-stack todo application built with Flask (Python) backend and vanilla JavaScript frontend. This project demonstrates clean architecture, RESTful API design, and responsive web development.

![Todo App](https://img.shields.io/badge/Status-Active-success)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Flask](https://img.shields.io/badge/Flask-3.0+-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, Read, Update, and Delete todos
- 🎯 **Smart Filtering** - View all, active, or completed todos
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop
- 🎨 **Modern UI** - Clean, gradient-based design with smooth animations
- 🔄 **Auto-Sync** - Automatically refreshes data every 30 seconds
- 💾 **SQLite Database** - Persistent storage with SQLAlchemy ORM
- 🚀 **RESTful API** - Well-structured API endpoints
- ⚡ **Fast & Lightweight** - No heavy frameworks, pure vanilla JS

## 🏗️ Architecture

```
bob-todo-app/
├── backend/              # Flask API server
│   ├── app.py           # Main application & routes
│   ├── models.py        # Database models
│   ├── database.py      # Database configuration
│   └── requirements.txt # Python dependencies
├── frontend/            # Vanilla JS frontend
│   ├── index.html      # Main HTML structure
│   ├── styles.css      # Responsive CSS styling
│   ├── app.js          # JavaScript logic & API calls
│   └── README.md       # Frontend documentation
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Modern web browser

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python3 -m venv .venv
   ```

3. **Activate virtual environment:**
   ```bash
   # On macOS/Linux:
   source .venv/bin/activate
   
   # On Windows:
   .venv\Scripts\activate
   ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Flask server:**
   ```bash
   python app.py
   ```

   The backend will start on `http://localhost:3001`

### Frontend Setup

1. **Open a new terminal and navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Start a simple HTTP server:**
   ```bash
   # Using Python:
   python3 -m http.server 8000
   
   # Or using Node.js (if installed):
   npx http-server -p 8000
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a specific todo |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |
| GET | `/api/health` | Health check |

### Example API Requests

**Create a Todo:**
```bash
curl -X POST http://localhost:3001/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": false}'
```

**Get All Todos:**
```bash
curl http://localhost:3001/api/todos
```

**Update a Todo:**
```bash
curl -X PUT http://localhost:3001/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

**Delete a Todo:**
```bash
curl -X DELETE http://localhost:3001/api/todos/1
```

## 🎨 Frontend Features

- **Modern Gradient Design** - Purple gradient theme with smooth transitions
- **Responsive Layout** - Mobile-first design that adapts to all screen sizes
- **Filter Tabs** - Quickly switch between All, Active, and Completed todos
- **Real-time Counters** - See counts for each filter category
- **Smooth Animations** - Slide-in effects and hover states
- **Accessibility** - Keyboard navigation and screen reader support
- **Error Handling** - User-friendly error messages
- **XSS Protection** - HTML escaping for security

## 🛠️ Technology Stack

### Backend
- **Flask** - Lightweight Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **Flask-CORS** - Cross-Origin Resource Sharing support
- **SQLite** - Embedded database

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Fetch API** - For HTTP requests

## 📝 Database Schema

```sql
CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:3001/api/health

# Get all todos
curl http://localhost:3001/api/todos
```

### Test Frontend
1. Open browser to `http://localhost:8000`
2. Add a new todo
3. Mark it as completed
4. Filter by status
5. Delete the todo

## 🔧 Configuration

### Change Backend Port
Edit `backend/app.py`:
```python
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3001)  # Change port here
```

### Change Frontend API URL
Edit `frontend/app.js`:
```javascript
const API_BASE_URL = 'http://localhost:3001/api';  // Change URL here
```

## 📦 Dependencies

### Backend (Python)
```
Flask==3.0.0
Flask-SQLAlchemy==3.1.1
Flask-CORS==4.0.0
```

### Frontend
No external dependencies - pure vanilla JavaScript!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ using Flask and Vanilla JavaScript
- Inspired by modern todo applications
- Created as a demonstration of full-stack development

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Made with Bob** 🤖