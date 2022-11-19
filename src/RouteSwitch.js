import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ImportFaces from "./ImportFaces";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/importFaces" element={<ImportFaces />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;