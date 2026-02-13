// API Configuration
const API_BASE_URL = 'http://localhost:3001/api';

// State Management
let todos = [];
let currentFilter = 'all';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const allCount = document.getElementById('allCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Add todo on button click
    addBtn.addEventListener('click', handleAddTodo);
    
    // Add todo on Enter key
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTodos();
        });
    });
}

// API Functions
async function fetchTodos() {
    try {
        const response = await fetch(`${API_BASE_URL}/todos`);
        if (!response.ok) throw new Error('Failed to fetch todos');
        return await response.json();
    } catch (error) {
        console.error('Error fetching todos:', error);
        showError('Failed to load todos. Please check if the backend is running.');
        return [];
    }
}

async function createTodo(title) {
    try {
        const response = await fetch(`${API_BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        });
        
        if (!response.ok) throw new Error('Failed to create todo');
        return await response.json();
    } catch (error) {
        console.error('Error creating todo:', error);
        showError('Failed to create todo');
        return null;
    }
}

async function updateTodo(id, updates) {
    try {
        const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        
        if (!response.ok) throw new Error('Failed to update todo');
        return await response.json();
    } catch (error) {
        console.error('Error updating todo:', error);
        showError('Failed to update todo');
        return null;
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) throw new Error('Failed to delete todo');
        return true;
    } catch (error) {
        console.error('Error deleting todo:', error);
        showError('Failed to delete todo');
        return false;
    }
}

// Handler Functions
async function loadTodos() {
    showLoading(true);
    todos = await fetchTodos();
    renderTodos();
    updateCounts();
    showLoading(false);
}

async function handleAddTodo() {
    const title = todoInput.value.trim();
    
    if (!title) {
        todoInput.focus();
        return;
    }
    
    showLoading(true);
    const newTodo = await createTodo(title);
    
    if (newTodo) {
        todos.unshift(newTodo);
        todoInput.value = '';
        renderTodos();
        updateCounts();
    }
    
    showLoading(false);
    todoInput.focus();
}

async function handleToggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    
    const updatedTodo = await updateTodo(id, { completed: !todo.completed });
    
    if (updatedTodo) {
        todo.completed = updatedTodo.completed;
        renderTodos();
        updateCounts();
    }
}

async function handleDeleteTodo(id) {
    if (!confirm('Are you sure you want to delete this todo?')) {
        return;
    }
    
    showLoading(true);
    const success = await deleteTodo(id);
    
    if (success) {
        todos = todos.filter(t => t.id !== id);
        renderTodos();
        updateCounts();
    }
    
    showLoading(false);
}

// Render Functions
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="handleToggleTodo(${todo.id})"
            >
            <span class="todo-text">${escapeHtml(todo.title)}</span>
            <div class="todo-actions">
                <button 
                    class="delete-btn" 
                    onclick="handleDeleteTodo(${todo.id})"
                    aria-label="Delete todo"
                >
                    Delete
                </button>
            </div>
        </li>
    `).join('');
}

function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

function updateCounts() {
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;
    
    allCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

// Utility Functions
function showLoading(isLoading) {
    if (isLoading) {
        document.body.classList.add('loading');
        addBtn.disabled = true;
    } else {
        document.body.classList.remove('loading');
        addBtn.disabled = false;
    }
}

function showError(message) {
    // Simple error notification - could be enhanced with a toast/notification system
    alert(message);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Auto-refresh todos every 30 seconds to sync with backend
setInterval(() => {
    loadTodos();
}, 30000);

// Handle visibility change - refresh when tab becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        loadTodos();
    }
});

// Made with Bob
