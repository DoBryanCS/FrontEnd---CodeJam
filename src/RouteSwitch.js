import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./importFaces";
import Import from "./Import";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/importFaces" element={<Import />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;