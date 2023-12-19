import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";
import SideBar2 from "../Sidebar2";

const SellerDashboard = () => {
  return (
    <>
      <SideBar2 />
      <ProductTable />
      <OrderTable />
    </>
  );
};

export default SellerDashboard;
