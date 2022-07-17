import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className="logoText" style={{ fontSize: 30 }}>MirzoDev</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{ marginTop: 50 }} className="social-icon">
              <a href="https://www.linkedin.com/in/akbaraliyev-shohriyormizo-7693b4225/"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="httpd://t.me/@Shohriyormirzo"><img src={navIcon2} alt="Telegram Icon" /></a>
              <a href="https://www.instagram.com/mirzodeveloper/"><img src={navIcon3} alt="Instagram Icon" /></a>
            </div>
            <p>Created By Shohriyormirzo Akbaraliyev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
