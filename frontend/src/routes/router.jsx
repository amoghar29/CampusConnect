import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
