# Flask Application

This project is a simple Flask-based web application that demonstrates the use of Flask for creating web applications with dynamic content.

## Project Structure

```
flask-app-1
├── temp.py             # Main Flask application
├── requirements.txt    # Python dependencies
├── Procfile            # Railway/Gunicorn start command
├── README.md           # Project documentation
├── static
│   ├── temp.js         # Client-side JavaScript
│   └── temp.css        # CSS styles
└── templates
    └── temp.html       # HTML template
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd flask-app-1
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Usage

To run the Flask application locally, execute:
```
python temp.py
```
For production or Railway deployment, use:
```
gunicorn temp:app
```

The application will be accessible at `http://127.0.0.1:5000/`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
