# Todo App Frontend

A modern, responsive frontend for the Todo application built with vanilla HTML, CSS, and JavaScript.

## Features

- ✨ Clean, modern UI with gradient design
- 📱 Fully responsive (mobile and desktop)
- 🎯 Filter todos by status (All, Active, Completed)
- ✅ Toggle todo completion
- 🗑️ Delete todos
- 🔄 Auto-refresh every 30 seconds
- ⚡ Real-time API integration with Flask backend

## Prerequisites

- Backend server running on `http://localhost:3001`
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Running the Frontend

### Option 1: Using Python's Built-in Server

```bash
cd frontend
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

### Option 2: Using Node.js http-server

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
cd frontend
http-server -p 8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Access

Simply open `index.html` directly in your browser. Note: CORS may need to be enabled in the backend for this to work.

## Testing the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   python app.py
   ```
   Backend should be running on `http://localhost:3001`

2. **Start the Frontend Server** (using any method above)

3. **Test Features**
   - Add a new todo by typing in the input field and clicking "Add Todo" or pressing Enter
   - Click the checkbox to mark a todo as completed
   - Click "Delete" to remove a todo
   - Use the filter tabs (All, Active, Completed) to filter todos
   - Check the counters update correctly

## API Endpoints Used

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Troubleshooting

### "Failed to load todos" Error

- Ensure the backend server is running on port 3001
- Check browser console for CORS errors
- Verify the backend has CORS enabled (flask-cors installed)

### Todos Not Appearing

- Check browser console for errors
- Verify API_BASE_URL in app.js matches your backend URL
- Test backend directly: `curl http://localhost:3001/api/todos`

### Styling Issues

- Clear browser cache
- Ensure styles.css is in the same directory as index.html
- Check browser console for 404 errors

## File Structure

```
frontend/
├── index.html      # Main HTML structure
├── styles.css      # Responsive CSS styling
├── app.js          # JavaScript for API interactions
└── README.md       # This file
```

## Customization

### Change API URL

Edit `app.js` and modify the `API_BASE_URL` constant:

```javascript
const API_BASE_URL = 'http://your-backend-url:port/api';
```

### Modify Colors

Edit `styles.css` and change the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6366f1;  /* Change primary color */
    --success-color: #10b981;  /* Change success color */
    /* ... other colors */
}
```

## Performance

- Lightweight: No external dependencies
- Fast load time: ~50KB total
- Efficient rendering: Only updates changed elements
- Auto-refresh: Syncs with backend every 30 seconds

## Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- Focus indicators for interactive elements
- Reduced motion support for accessibility preferences

## License

MIT License - Feel free to use and modify as needed.