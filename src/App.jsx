import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/Auth/ResetPassword";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
// import LoginPage from "./pages/LoginPage"
// import RegisterPage from "./pages/RegisterPage"
// import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route
            path="/"
            element={<HomePage/>}
          />
          <Route
            path="/login"
            element={<LoginPage/>}
          />
          <Route
            path="/register"
            element={<RegisterPage/>}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
