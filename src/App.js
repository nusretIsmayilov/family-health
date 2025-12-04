import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from './pages/logInPage/logIn';
import SignUp from './pages/logInPage/signUp';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

