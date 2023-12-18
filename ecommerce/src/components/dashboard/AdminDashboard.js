import UserTable from "../dashboard/UserTable";
import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";
import SideBar from "../Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <SideBar />
      <UserTable />
      <ProductTable />
      <OrderTable />
    </>
  );
};

export default AdminDashboard;
