import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddName from "./AddName";
import HomePage from "./homePage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/homePage" element={<HomePage />} />
        <Route exact path="/addName" element={<AddName />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;