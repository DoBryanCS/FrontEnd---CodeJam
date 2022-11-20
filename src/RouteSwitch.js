import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddName from "./AddName";
import AddFace from "./AddFace";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/addName" element={<AddName />} />
        <Route exact path="/addFace/:name" element={<AddFace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;