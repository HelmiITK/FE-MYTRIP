

const SendEmail = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] ">
          <form className="w-full">
            <h1 className="text-[24px] font-bold text-darkblue mb-4">Send Email</h1>
            <span className="text-[20px] font-bold text-darkblue mt-20">
              Masukkan Email anda untuk melakukan reset password
            </span>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col mt-4">
                <div className="flex justify-between items-center">
                  <label className="text-[15px] mb-[4px]">Masukkan Password Baru</label>
                </div>
                <div className="relative">
                  <input
                    // type={showPassword ? "text" : "password"}
                    className="border w-full p-2 rounded-2xl pr-[3.5rem]"
                    placeholder="Masukkan password"
                    // value={newPassword}
                    // onChange={handlePasswordMatch}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full text-[14px] bg-black text-white py-[10px] rounded-2xl mt-5 type"
              //   disabled={isLoading}
            >
              {/* {isLoading ? "Loading..." : "SIMPAN"} */}
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

export default SendEmail;
