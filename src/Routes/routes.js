import { Routes, Route } from "react-router-dom";
import RegisterConsumer from "../components/RegisterConsumer";

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
      </Routes>
    </>
  );
}

export default Ways;
