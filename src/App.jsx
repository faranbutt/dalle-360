import Authentication from "./components/Auth";
import BodyWeb from "./components/body/BodyWeb";
import { Route, Routes, Outlet } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BodyWeb />} />
      <Route path="auth" element={<Authentication />} />
    </Routes>
  );
}

export default App;
