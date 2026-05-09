import "../css/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-div">
        <h2 className="about-h1">About IT Archives</h2>
        <p className="about-subtitle">
          <strong>IT Archives</strong> is my personal reviewer designed to
          showcase the IT-related courses I completed as part of my BSIT
          program. This serves as my personal notes to document my learning
          journey and share resources used during my studies.
        </p>
        <p className="about-portfolio">
          More about me:{" "}
          <a href="https://ehmughn.github.io/" className="portfolio-link">
            https://ehmughn.github.io/
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
