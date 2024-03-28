import  { Navbar } from "../../components/Navbar"
import Footer from "../../components/Footer"


function Profile() {
  const profileData = {
    name: "Darrell Kahima Hebat",
    email: "Darrellkahima@gmail.com",
    phone: "088888888888",
    imageSrc: "https://ik.imagekit.io/ynq5bc6ez/Image_20240328_013227_565.jpeg?updatedAt=1711560865269",
  };

  return (
    <>
        <Navbar/>
        <div className="flex flex-col pt-20 bg-slate-100">
        <div className="flex flex-col items-center px-16 pb-20 mt-52 w-full bg-blue-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex z-10 justify-center items-center px-16 py-20 mt-0 mb-7 max-w-full bg-white rounded-3xl shadow-sm w-[802px] max-md:px-5">
            <div className="mt-24 mb-20 max-w-full w-[563px] max-md:my-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <img
                    loading="lazy"
                    src={profileData.imageSrc}
                    alt="Profile"
                    className="shrink-0 mt-6 rounded-full max-w-full aspect-[1.04] w-[206px] max-md:mt-10"
                    />
                </div>
                <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-2xl font-semibold text-zinc-500 max-md:mt-10">
                    <div>Nama</div>
                    <div className="text-black">{profileData.name}</div>
                    <div className="mt-3.5">Email</div>
                    <div className="text-black">{profileData.email}</div>
                    <div className="mt-3.5">No Telepon</div>
                    <div className="text-black">{profileData.phone}</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
}

export default Profile