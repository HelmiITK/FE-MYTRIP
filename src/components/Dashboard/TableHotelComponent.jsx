

const TableComponent = () => {
  return (
    // <div className="overflow-x-auto w-full">
    //   <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Nama Hotel</th>
            <th className="px-4 py-3 text-left">Photo</th>
            <th className="px-4 py-3 text-left">Nama Kota</th>
            <th className="px-4 py-3 text-left">Deskripsi</th>
            <th className="px-4 py-3 text-left">Alamat</th>
            <th className="px-4 py-3 text-left">Fasilitas</th>
            <th className="px-4 py-3 text-left">Kategori</th>
            <th className="px-4 py-3 text-left">Harga</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
    //   </table>
    // </div>
  );
}

export default TableComponent