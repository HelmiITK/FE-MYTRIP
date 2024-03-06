import { useState } from "react";
// import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  // const [resetPasswordToken, setResetPasswordToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordMatch = (event) => {
    setNewPassword(event.target.value);
    passwordValidation(event.target.value, confirmNewPassword);
  };

  const handleConfirmPasswordMatch = (event) => {
    setConfirmNewPassword(event.target.value);
    passwordValidation(newPassword, event.target.value);
  };

  const passwordValidation = (password, confirm) => {
    if (password !== confirm) {
      setPasswordError("Password Not Match!");
    } else {
      setPasswordError("");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!newPassword) {
      setErrorMessage("Silahkan isi password terbaru");
      return;
    }

    if (!confirmNewPassword) {
      setErrorMessage("Silahkan isi konfirmasi password");
      return;
    }

    if (passwordError) {
      setErrorMessage("Password and Confirm Password not match");
      return;
    }

    setIsLoading(true);

    //  try {
    //    await dispatch(resetPassword(resetPasswordToken, newPassword, confirmNewPassword, navigate));
    //    // alert("Password Berhasil Diganti 🥳");
    //    // navigate("/");
    //  } catch (error) {
    //    alert(error.message);
    //  } finally {
    //    setIsLoading(false);
    //  }
  };
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
          <form onSubmit={handleResetPassword} className="w-full">
            <h1 className="text-[24px] font-bold text-darkblue mb-4">Reset Password</h1>
            <span className="text-[20px] font-bold text-darkblue mt-20">
              Silahkan Masukkan Kata Sandi baru di bawah
            </span>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col mt-4">
                <div className="flex justify-between items-center">
                  <label className="text-[15px] mb-[4px]">Masukkan Password Baru</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                    placeholder="Masukkan password"
                    value={newPassword}
                    onChange={handlePasswordMatch}
                  />
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                  >
                    {showPassword ? (
                      <FiEye className="border-none" />
                    ) : (
                      <FiEyeOff className="border-none" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-[15 px] mb-[4px]">Konfirmasi Password Baru</label>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                    placeholder="Masukkan password"
                    value={confirmNewPassword}
                    onChange={handleConfirmPasswordMatch}
                  />
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    onClick={toggleConfirmPassword}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 border rounded-lg"
                  >
                    {showConfirmPassword ? (
                      <FiEye className="border-none" />
                    ) : (
                      <FiEyeOff className="border-none" />
                    )}
                  </button>
                </div>
                {errorMessage && <p className="text-color-warn text-xs mb-2">{errorMessage}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full text-[14px] bg-black text-white py-[10px] rounded-2xl mt-5 type"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "SIMPAN"}
            </button>
          </form>
        </div>
        <div className="hidden lg:flex justify-center items-center bg-indigo-700 w-[50%] min-h-[100dvh]">
          <img src="" alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
