import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Jan",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Feb",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Mar",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Apr",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Mei",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Jun",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Jul",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Agu",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Sept",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Okt",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Nov",
    Pesawat: 3490,
    Hotel: 4300,
  },
  {
    name: "Des",
    Pesawat: 5490,
    Hotel: 4300,
  },
];

const TransactionStats = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 ">
      <strong className="text-gray-700 font-medium ">Transactions</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Hotel" fill="#8884d8" />
            <Bar dataKey="Peawat" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionStats;
