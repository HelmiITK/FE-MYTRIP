
import logo from "../assets/logo2.png"
import instagram from "../assets/skill-icons_instagram.svg"
import facebook from "../assets/logos_facebook.svg"
import github from "../assets/icon-park_github.svg"

const Footer = () => {
   return (
      <div className="container mx-auto mt-14 bg-blue-950">
         <div className="mx-44 py-10 flex gap-24">
            <div className="flex flex-col gap-4 w-1/2">
               <img
                  src={logo}
                  alt="Logo MyTrip"
                  className="w-72 h-24"
               />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo alias reprehenderit eveniet facere! Vitae ut nobis voluptatum corporis voluptatem.</p>
               <div className="flex gap-5 mt-5">
                  <img src={github} alt="" />
                  <img src={instagram} alt="" />
                  <img src={facebook} alt="" />
               </div>
            </div>
            <div className="flex flex-row gap-20">
               {/* About */}
               <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-lg">About</h1>
                  <div className="flex flex-col gap-2 text-base font-normal">
                     <p className="cursor-pointer hover:text-white">About us</p>
                     <p className="cursor-pointer hover:text-white">FAQ</p>
                     <p className="cursor-pointer hover:text-white">Our Review</p>
                  </div>
               </div>
               {/* Tools */}
               <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-lg">Tools</h1>
                  <div className="flex flex-col gap-2 text-base font-normal">
                     <p className="cursor-pointer hover:text-white">Visual Studio Code</p>
                     <p className="cursor-pointer hover:text-white">Postman</p>
                     <p className="cursor-pointer hover:text-white">Git & Github</p>
                  </div>
               </div>
               {/* Develope */}
               <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-lg">Develope</h1>
                  <div className="flex flex-col gap-2 text-base font-normal">
                     <p className="cursor-pointer hover:text-white">ReactJs</p>
                     <p className="cursor-pointer hover:text-white">ExpressJs</p>
                     <p className="cursor-pointer hover:text-white">TailwindCss</p>
                     <p className="cursor-pointer hover:text-white">Vite</p>
                     <p className="cursor-pointer hover:text-white">Vercel</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer