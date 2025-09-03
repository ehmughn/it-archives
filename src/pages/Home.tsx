import { useNavigate } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      Home{" "}
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
