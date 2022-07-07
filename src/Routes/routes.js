import { Routes, Route } from "react-router-dom";
import RegisterConsumer from "../components/RegisterConsumer";
import RegisterSeller from "../components/RegisterSeller";

function Ways() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            {
              /* Componente do caminho */
            }
          }
        />
        <Route
          path="about"
          element={
            {
              /* Componente do caminho */
            }
          }
        />
        <Route
          path="consumer/register"
          element={
            <RegisterConsumer />
          }
        />
        <Route
          path="seller/register"
          element={
            <RegisterSeller />
          }
        />
      </Routes>
    </>
  );
}

export default Ways;
