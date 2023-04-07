import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
