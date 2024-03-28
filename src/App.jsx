import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/Auth/ResetPassword";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import SendEmail from "./pages/Auth/SendEmail";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route
            path="/"
            element={<HomePage/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
