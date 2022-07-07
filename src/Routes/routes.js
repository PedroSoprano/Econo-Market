import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";

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
          path="/Login"
          element={
            <Login />
          }
        />
        <Route
          path="/"
          element={
            {
              /* Componente do caminho */
            }
          }
        />
      </Routes>
    </>
  );
}

export default Ways;
