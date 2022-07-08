import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function Ways() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="about"
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
