import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/Home";
import RegisterConsumer from "../components/RegisterConsumer";
import RegisterSeller from "../components/RegisterSeller";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="consumer/register" element={<RegisterConsumer />} />
        <Route path="seller/register" element={<RegisterSeller />} />
      </Routes>
    </>
  );
}

export default Ways;
