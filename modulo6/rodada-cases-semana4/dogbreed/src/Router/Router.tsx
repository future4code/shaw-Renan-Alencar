import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import List from "../Pages/List/List";
import Register from "../Pages/Register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/list" element={<List />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
