import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Index";
import Service from "./pages/service/Index";
import MobHeader from "./layout/MobHeader";

const App = () => {
  return (
    <>
      <MobHeader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default App;
