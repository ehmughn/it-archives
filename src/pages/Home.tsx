import { useNavigate } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home</h1>
      <button
        onClick={() => {
          navigate("/course/CTPRJMGT");
        }}
      >
        Project Management
      </button>
      <button
        onClick={() => {
          navigate("/course/CTADNETL");
        }}
      >
        Advanced Networking
      </button>
      <button
        onClick={() => {
          navigate("/course/CTINPRGL");
        }}
      >
        Integrative Programming
      </button>
    </>
  );
}

export default Home;
