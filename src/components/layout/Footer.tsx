import "../../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} IT Archives. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
