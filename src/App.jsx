import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./pages/Auth/ResetPassword";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import SendEmail from "./pages/Auth/SendEmail";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/Admin/DashboardPage";
import KelolaHotel from "./pages/Admin/KelolaHotel";
import Layout from "./components/Admin/Layout";
import HotelPage from "./pages/HomePage/HotelPage";
import Profile from "./pages/Auth/Profile";
import PaymetHotel from "./pages/Payment/PaymetHotel";
import NotFoundPage from "./pages/NotFoundPage";
import KelolaPesawat from "./pages/Admin/KelolaPesawat";
import AddHotel from "./components/Modal/AddHotel";
import AddPesawat from "./components/Modal/AddPesawat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/" element={<HomePage />} />

          {/* modal view test */}
          <Route path="/modal-hotel" element={<AddHotel />} />
          <Route path="/modal-pesawat" element={<AddPesawat />} />

          {/* Admin */}
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="kelola-hotel" element={<KelolaHotel />} />
            <Route path="kelola-pesawat" element={<KelolaPesawat />} />
            {/* <Route path="pesawat" element={<KelolaHotel />} /> */}
          </Route>
          {/* <Route path="/admin" element={<Layout />} /> */}
          <Route path="/payment-hotel" element={<PaymetHotel />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel" element={<HotelPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;