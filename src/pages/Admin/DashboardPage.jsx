import DahboardStats from "../../components/Admin/DahboardStats";
import RecentHP from "../../components/Admin/RecentHP";
import TransactionStats from "../../components/Admin/TransactionStats";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <DahboardStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionStats />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentHP />
      </div>
    </div>
  );
};

export default DashboardPage;
