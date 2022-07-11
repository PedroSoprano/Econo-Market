import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/Home";
import RegisterConsumer from "../components/RegisterConsumer";
import RegisterSeller from "../components/RegisterSeller";
import DashboardMercado from "../components/DashboardMercado";
import ReservedListSeller from "../components/ReservedListSeller";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

        <Route path="consumer/register" element={<RegisterConsumer />} />
        <Route path="seller/register" element={<RegisterSeller />} />
        <Route path="seller/dashboard" element={<DashboardMercado />} />
        <Route path="seller/reserved" element={<ReservedListSeller />} />
      </Routes>
    </>
  );
}

export default Ways;
