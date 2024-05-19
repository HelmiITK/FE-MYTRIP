import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/Actions/AuthActions";

const RegisterPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name && !email && !phoneNumber && !password) {
      alert("Anda Belum Mengisi Data Diri");
      return;
    } else if (name === "") {
      alert("Nama Belum Di Isi");
      return;
    } else if (phoneNumber === "") {
      alert("No HP Belum Di Isi");
      return;
    } else if (password === "") {
      alert("Kata Sandi Belum Di Isi");
      return;
    } else if (password.length < 8) {
      alert("Password Minimal 8 Karakter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Password harus memiliki setidaknya satu huruf besar");
      return;
    } else if (!/[0-9]/.test(password)) {
      alert("Password harus memiliki setidaknya satu angka");
      return;
    }

    dispatch(register(email, password, name, phoneNumber, navigate));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
          <form onSubmit={handleRegister} className="w-full">
            <h1 className="text-[24px] font-bold text-indigo-700 mb-8">Daftar</h1>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col">
                <label className="text-[15px] mb-[4px] font-popins">name</label>
                <input
                  type="text"
                  className="border w-full p-2 rounded-2xl"
                  placeholder="nama Lengkap"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[15px] mb-[4px] font-Poppins">Email</label>
                <input
                  type="email"
                  className="border w-full p-2 rounded-2xl"
                  placeholder="Contoh: myTrip@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[15px] mb-[4px] font-Poppins">Nomor Telepon</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={14}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+62"
                  className="border w-full p-2 rounded-2xl appearance-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-[15px] mb-[4px] font-Poppins">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                  >
                    {showPassword ? (
                      <FiEyeOff className="border-none" />
                    ) : (
                      <FiEye className="border-none" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full text-[14px] font-medium bg-black text-white py-[10px] rounded-2xl mt-5">
              Daftar
            </button>
            <div className="flex justify-center items-center gap-2 mt-6">
              <h1 className="text-[14px] font-normal font-Poppins">Sudah punya akun?</h1>
              <Link to="/login" className="text-darkblue text-[14px] font-bold">
                Masuk di sini
              </Link>
            </div>
          </form>
        </div>

        <div className="hidden lg:flex justify-center items-center bg-indigo-700 w-[50%] min-h-[100dvh]">
          <img
            src="https://plus.unsplash.com/premium_photo-1700681802509-d31a20943657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBhc3N3b3JkfGVufDB8fDB8fHww"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
