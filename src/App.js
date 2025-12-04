import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from './pages/logInPage/logIn';
import SignUp from './pages/logInPage/signUp';
import Home from './pages/homePage/home';
import Features from "./pages/featuresPage/Features";
import Pricing from "./pages/pricing/pricing";
import Contact from "./pages/contactPage/Contact";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

