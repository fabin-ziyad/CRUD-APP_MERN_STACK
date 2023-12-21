import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditProfilePage from "./pages/User/EditProfile";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/edit/:id" element={<EditProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
