import Logo from '../assets/Logo.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { getMe, logout } from '../pages/redux/Actions/AuthActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { FaSackDollar } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const Navbar = () => {
   const Menus = [
      {
         nama: "Home",
         link: "/",
      },
      {
         nama: "About",
         link: "/",
      },
      {
         nama: "FAQ",
         link: "/",
      },
   ]

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { user, token } = useSelector((state) => state.auth);
   console.log(user)

   useEffect(() => {
      if (token) {
         dispatch(getMe(navigate, null, "/"));
      }
   }, [dispatch, navigate, token]);

   const handleLogout = () => {
      Swal.fire({
         title: "Konfirmasi Logout",
         text: "Apakah Anda yakin ingin keluar?",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Ya, Keluar!",
      }).then((result) => {
         if (result.isConfirmed) {
            dispatch(logout());
            navigate("/");
         }
      });
   };

   return (
      <nav className="w-full fixed z-30 bg-opacity-25 backdrop-filter backdrop-blur-lg bg-white">
         <div className='flex justify-around items-center shadow-md py-5'>
            <div>
               <Link as={Link} to={'/'}>
                  <img src={Logo} alt="LogoMyTrip" />
               </Link>
            </div>

            <div className='flex gap-14'>
               {Menus.map((item, index) => (
                  <ul key={index}>
                     <Link as={Link} to={`${item.link}`} className='text-black text-lg font-semibold hover:scale-105 duration-300 hover:text-white cursor-pointer'>
                        {item.nama}
                     </Link>
                  </ul>
               ))}
            </div>
            {!user ? (

               <div className='flex gap-4'>
                  <NavLink to={"/login"}>
                     <button className='border-2 border-blue-600 hover:border-blue-700 rounded-2xl bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 duration-300'>
                        Login
                     </button>
                  </NavLink>
                  <NavLink to={"/register"}>
                     <button className='border-2  border-blue-600 hover:border-blue-700 rounded-2xl bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700 duration-300'>
                        Register
                     </button>
                  </NavLink>
               </div>
            ) : (

               <div className='flex flex-row gap-6 items-center'>
                  <div className="dropdown dropdown-end">
                     <div tabIndex={0} role="button" className="btn m-1">halo 👋🏻 {user?.data?.name}</div>
                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='flex items-center gap-2 mx-2'>
                           <FaSackDollar className='w-6 h-6 text-yellow-500' />
                           <h2 className='text-yellow-600 font-medium text-2xl'>{user?.data?.saldo_user}</h2>
                        </div>
                        <div className='flex items-center gap-2 mx-2 mt-2'>
                           <FaPhoneSquareAlt className='w-6 h-6'/>
                           <h2 className='text-lg font-medium'>{user?.data?.phoneNumber}</h2>
                        </div>
                     </ul>
                  </div>
                  <button
                     onClick={() => handleLogout()}
                     className='border-none bg-red-500 text-white font-medium py-2 px-4 rounded-md'>
                     Log Out
                  </button>
               </div>
            )}

         </div>
      </nav>
   )
}
