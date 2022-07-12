import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/Home";
import RegisterConsumer from "../components/RegisterConsumer";
import RegisterSeller from "../components/RegisterSeller";
import DashboardMercado from "../components/DashboardMercado";
import WishList from "../components/WishList";
import EditConsumerForm from "../components/EditConsumerForm";

function Ways() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<DashboardMercado />} />
        <Route exact path="consumer/register" element={<RegisterConsumer />} />
        <Route exact path="seller/register" element={<RegisterSeller />} />
        <Route exact path="/wishlist" element={<WishList />}/>
        <Route exact path="/editarform" element={<EditConsumerForm />}/>
      </Routes>
    </>
  );
}

export default Ways;
