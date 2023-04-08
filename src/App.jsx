import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Index";
import Service from "./pages/service/Index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
