import axios from "axios";
import { setToken } from "../Reducers/AuthReducers";
import { toast } from "react-toastify";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

// export const loginAdmit = (email, password, navigate) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${api_url}/auth/admit/login`, {
//       email: email,
//       password: password,
//     });

//     const { data } = response.data;
//     const { token } = data;

//     dispatch(setToken(token));
//     navigate("/admin/dashboard");
//   } catch (error) {
//     if (error.response) {
//       if (error.response.status === 403) {
//         toast.error("Email atau Password Anda salah. Silahkan coba lagi.");
//       } else if (error.response.status === 404) {
//         toast.error("Email tidak terdaftar. Silakan cek kembali email Anda.");
//       } else {
//         toast.error("Login gagal. Silakan coba lagi nanti.");
//       }
//     } else {
//       toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
//     }
//   }
// };

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${api_url}/auth/login`, {
      email: email,
      password: password,
    });

    const { data } = response.data;
    const { token } = data;

    dispatch(setToken(token));
    navigate("/");
  } catch (error) {
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

// export const sendEmail = ()
