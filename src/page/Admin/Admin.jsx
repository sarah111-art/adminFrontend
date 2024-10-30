import { Route, Routes } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import ListCart from "../../components/ListOrder/ListOrder";
import ListProduct from "../../components/ListProduct/ListProduct";
import Login from "../../components/Login/Login";
import SideBar from "../../components/SideBar/SideBar";
import "./Admin.css";
const Admin = () => {
  return (
    <div className="admin">
      <SideBar />
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
        <Route path="/listCart" element={<ListCart />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default Admin;
