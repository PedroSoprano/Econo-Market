import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/Home";
import RegisterConsumer from "../components/RegisterConsumer";
import RegisterSeller from "../components/RegisterSeller";
import DashboardMercado from "../components/DashboardMercado";
<<<<<<< HEAD
import ReservedSeller from "../pages/ReservedSeller";
=======
import WishList from "../components/WishList";
>>>>>>> develop

function Ways() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

        <Route path="consumer/register" element={<RegisterConsumer />} />
        <Route path="seller/register" element={<RegisterSeller />} />
        <Route path="seller/dashboard" element={<DashboardMercado />} />
        <Route path="seller/reserved" element={<ReservedSeller />} />
=======
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<DashboardMercado />} />
        <Route exact path="consumer/register" element={<RegisterConsumer />} />
        <Route exact path="seller/register" element={<RegisterSeller />} />
        <Route exact path="/wishlist" element={<WishList />}/>
>>>>>>> develop
      </Routes>
    </>
  );
}

export default Ways;
