import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-div">
        <h2 className="contact-h1">Contact Me</h2>
        <p className="contact-subtitle">
          If you have any questions or feedback, feel free to reach out!
        </p>
        <p className="contact-text">
          Contact me directly at{" "}
          <a
            href="mailto:emanhatesschool1234@gmail.com"
            className="contact-link"
          >
            emanhatesschool1234@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Contact;
