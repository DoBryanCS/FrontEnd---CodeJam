import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddName from "./AddName";
import AddFace from "./AddFace";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addName" element={<AddName />} />
        <Route path="/addFace/:name" element={<AddFace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;