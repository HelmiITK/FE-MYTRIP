import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/Actions/AuthActions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Please enter your email and password!");
      return;
    } else if (!email) {
      alert("email belum di isi");
      return;
    } else if (!password) {
      alert("password belum di isi");
      return;
    } else if (password.length < 8) {
      alert("Password harus minimal 8 karakter");
      return;
    }

    dispatch(login(email, password, navigate));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center mx-[23px] lg:px-[145px] ">
          <form onSubmit={handleLogin} className="w-full">
            <h1 className="text-[24px] font-bold text-darkblue mb-8">Masuk</h1>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="text-[15px] mb-[4px] font-Poppins">Email/No Telepon</label>
                <input
                  type="email"
                  className="border text-[14px] w-full p-2 rounded-xl"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-[15px]">
                <div className="flex justify-between items-center">
                  <label className="mb-[4px] font-popins">Password</label>
                  <Link to="/reset-Password">
                    <span className="text-darkblue font-Poppins">Lupa Password</span>
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className=" border text-[14px] w-full p-2 rounded-xl "
                    placeholder="Masukkan Password"
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
            <button className="bg-red-500 w-full text-[14px] font-medium bg-darkblue text-balack py-[10px] rounded-2xl mt-5">
              Masuk
            </button>
            <div className="flex flex-col justify-center items-center gap-2 mt-6">
              <div className="flex gap-2">
                <h1 className="text-[14px] font-normal font-poppins ">Tidak Ada Akun</h1>
                <Link to="/Register" className="text-black text-[14px] font-bold ">
                  Daftar Disini
                </Link>
              </div>
            </div>
          </form>
          <div className="">or Login With</div>
        </div>
        <div className="hidden lg:flex justify-center items-center bg-indigo-700 w-[50%] min-h-[100dvh] ">
          <img
            className="rounded-xl"
            src="https://cdn.dribbble.com/userupload/13200652/file/still-8f281b8a8432f11bcfc15c448cb8ba10.png?resize=450x338&vertical=center"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
