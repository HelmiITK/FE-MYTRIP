import { FaHotel, FaPlane } from "react-icons/fa";

const DahboardStats = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-700">
          <FaHotel className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500">Total Hotel Tersedia</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10000 Kamar</strong>
            <span className="text-sm text-green-500 pl-2">+999</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-700">
          <FaPlane className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500">Total Hotel Tersedia</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10000 Kamar</strong>
            <span className="text-sm text-green-500 pl-2">+999</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-700">
          <FaHotel className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500">Total Hotel Tersedia</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10000 Kamar</strong>
            <span className="text-sm text-green-500 pl-2">+999</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <FaPlane className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500">Total Hotel Tersedia</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10000 Kamar</strong>
            <span className="text-sm text-green-500 pl-2">+999</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DahboardStats;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-cente">
      {children}
    </div>
  );
}
