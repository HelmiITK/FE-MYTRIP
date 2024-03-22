import Logo from '../assets/Logo.png'
import { NavLink, Link } from 'react-router-dom'

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
                     <li className='text-black text-lg font-semibold hover:scale-105 duration-300 hover:text-white cursor-pointer'>{item.nama}</li>
                  </ul>
               ))}
            </div>
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

            {/* ini muncul ketika user sudah login */}
            {/* <div>
               <LuUserCircle />
            </div> */}
         </div>
      </nav>
   )
}
