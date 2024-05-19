import axios from "axios";
import { setToken, setUser } from "../Reducers/AuthReducers";
import { toast } from "react-toastify";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const login = (email, password, navigate) => async (dispatch) => {
   try {
      const response = await axios.post(`${api_url}/auth/member/login`, {
         email: email,
         password: password,
      });

      const data = response?.data?.data;
      const token = data;

      // console.log("Token received:", token); 
      dispatch(setToken(token));
      navigate("/");
   } catch (error) {
      console.error("Login error:", error); // Log any errors
      if (error.response) {
         if (error.response.status === 403) {
            toast.error("Email atau Password Anda salah. Silahkan coba lagi.");
         } else if (error.response.status === 404) {
            toast.error("Email tidak terdaftar. Silakan cek kembali email Anda.");
         } else {
            toast.error("Login gagal. Silakan coba lagi nanti.");
         }
      } else {
         toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
      }
   }
};


export const register = (email, password, name, no_telp, navigate) => async () => {
   try {
      const response = await axios.post(`${api_url}/auth/member/register`, {
         email: email,
         password: password,
         name: name,
         no_telp: no_telp,
      });

      if (response.status == 2001) {
         const { email } = response.data.user;
         localStorage.setItem("email", email);
         toast.success("Pendaftaran Berhasil");
      }
      setTimeout(() => {
         navigate("/login");
      }, 1000);
   } catch (error) {
      if (error.response) {
         if (error.response.status === 500) {
            // Status kode 500 menunjukkan kesalahan server
            toast.error("Terjadi kesalahan pada server. Email mungkin sudah terdaftar.");
         } else {
            toast.error("Gagal mendaftarkan pengguna. Silakan coba lagi nanti.");
         }
      } else {
         toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
      }
   }
};

export const getMe =
   (navigate, navigatePathSuccess, navigatePathError) =>
      async (dispatch, getState) => {
         try {
            let { token } = getState().auth;
            const response = await axios.get(`${api_url}/auth/me`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            const data = response.data;

            dispatch(setUser(data));
            if (navigatePathSuccess) navigate(navigatePathSuccess);
         } catch (error) {
            if (axios.isAxiosError(error)) {
               //if token is not valid
               if (error.response.status === 401) {
                  dispatch(logout());
               }
               // arahin ke halaman yang diizinkan
               if (navigatePathError) navigate(navigatePathError);
               return;
            }
            alert(error?.message);
         }
      };

export const logout = () => (dispatch) => {
   dispatch(setToken(null));
   dispatch(setUser(null));
};

// export const sendEmail = ()