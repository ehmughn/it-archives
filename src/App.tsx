import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectManagement from "./pages/courses/ProjectManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/CTPRJMGT" element={<ProjectManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
