# Frontend & Backend Connection Setup

## ✅ Architecture Overview

```
Frontend (React - Port 3000 via Vite)
    ↓ (API Calls to localhost:4005)
Backend (Node.js - Port 4005)
    ↓ (File Operations)
Database (student.json)
```

## 📋 Running the Application

### 1. **Start Backend Server**
```bash
cd backend
npm install
npm start
```
- Backend runs on: **http://localhost:4005**
- Listens to endpoints: `/register`, `/login`, `/msg`, `/data`

### 2. **Start Frontend Server**
```bash
cd frontend
npm install
npm run dev
```
- Frontend runs on: **http://localhost:5173** (Vite)
- Routes: `/`, `/login`, `/register`

## 🔗 Connected Endpoints

### Registration
- **Frontend Component**: `frontend/src/component/Registration.jsx`
- **Backend Endpoint**: `POST http://localhost:4005/register`
- **Expected Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: `{ "msg": "student registered successfully!!!" }`

### Login
- **Frontend Component**: `frontend/src/component/Login.jsx`
- **Backend Endpoint**: `POST http://localhost:4005/login`
- **Expected Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**: `{ "msg": "Login successful!!!" }` or `{ "msg": "Invalid email or password!!!" }`

## 📁 Project Structure

### Frontend Components
- **Main.jsx** - Home page with Login/Register links
- **Registration.jsx** - Student registration form
- **Login.jsx** - Student login form
- **Dashboard.jsx** - Dashboard after login
- **UseFetch.jsx** - Data fetching example

### Backend Routes
- **GET /msg** - Test endpoint
- **POST /register** - Register new student
- **POST /login** - Login student
- **GET /datawrite** - Write test data
- **GET /dataread** - Read test data
- **GET /datareadasync** - Read data asynchronously

## 🔍 Testing with Postman

### Test Login
1. Open Postman
2. Create new **POST** request
3. URL: `http://localhost:4005/login`
4. Go to **Body** → **raw** → **JSON**
5. Add:
   ```json
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```
6. Click **Send**

### Test Registration
1. Create new **POST** request
2. URL: `http://localhost:4005/register`
3. Go to **Body** → **raw** → **JSON**
4. Add:
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123"
   }
   ```
5. Click **Send**

## 🛠️ Configuration

### Backend Port
- File: `backend/index.js` (Line 3)
- Current: `PORT = 4005`

### Frontend URL
- Files: 
  - `frontend/src/component/Registration.jsx`
  - `frontend/src/component/Login.jsx`
- Current: `http://localhost:4005`

## ✨ Features Implemented

✅ Student Registration  
✅ Student Login  
✅ Form Validation  
✅ Error Handling  
✅ CORS Enabled  
✅ Navigation Links  
✅ Responsive Design  
✅ Success/Error Messages  
✅ Auto-redirect after Registration/Login  

## 🐛 Troubleshooting

### "Fetch Error" Message
- Check if backend is running on port 4005
- Check if frontend URL has correct port: `http://localhost:4005`

### "CORS Error"
- Backend has CORS headers already configured
- Make sure backend is running

### "File Not Found"
- `student.json` is created automatically on first registration
- If error persists, backend has error handling

## 📞 Support
For issues, check the browser console (F12) for detailed error messages.
