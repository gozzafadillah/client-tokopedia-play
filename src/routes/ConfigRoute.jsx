import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPages";
import Home from "../pages/Home";

const ConfigRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoute;
