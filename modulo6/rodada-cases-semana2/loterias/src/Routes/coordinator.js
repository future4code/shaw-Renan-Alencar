import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegaSena from "../Pages/MegaSena/MegaSena";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;