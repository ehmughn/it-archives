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
    </>
  );
}

export default Home;
