import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectManagement from "./pages/courses/ProjectManagement";
import AdvancedNetworking from "./pages/courses/AdvancedNetworking";
import IntegrativeProgramming from "./pages/courses/IntegrativeProgramming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/CTPRJMGT" element={<ProjectManagement />} />
        <Route path="/course/CTADNETL" element={<AdvancedNetworking />} />
        <Route path="/course/CTINPRGL" element={<IntegrativeProgramming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
