const recentdata = [
  {
    id: 1,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 2,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 1,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 2,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 3,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 4,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 5,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
  {
    id: 6,
    name: "Hotel",
    product_id: "#VZ210",
    costumer_name: "Alim Bangkit",
    tanggal: "2022-01-01T05:24:00",
    status: "Pending",
    harga: "Rp. 1.000.000",
  },
];
const RecentHP = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-700 flex-1">
      <strong className="text-gray-700 font-semibold ">Recent Hotel & Pesawat</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Product ID</td>
              <td>Costumer Name</td>
              <td>Tanggal</td>
              <td>Harga</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {recentdata.map((get) => (
              <tr key={get.id}>
                <td>#{get.id}</td>
                <td>{get.name}</td>
                <td>{get.product_id}</td>
                <td>{get.costumer_name}</td>
                <td>{new Date(get.tanggal).toLocaleDateString()}</td>
                <td>{get.harga}</td>
                <td>{get.status}</td>
              </tr>
            ))}
            {/* {recentdata.map((get) => (p
              <tr key={get.id}>
                <td>#{get.id}</td>
                <td>{get.name}</td>
                <td>{get.product_id}</td>
                <td>{get.costumer_name}</td>
                <td>{new Date(get.tanggal).toLocaleDateString()}</td>
                <td>{get.harga}</td>
                <td>{get.status}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentHP;
