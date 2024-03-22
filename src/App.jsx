import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/Auth/ResetPassword";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import HotelPage from "./pages/HomePage/HotelPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/hotel"
            element={<HotelPage />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
