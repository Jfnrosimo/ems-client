import { Link } from "react-router-dom";
import StudentDashboard from "views/examples/StudentDashboard";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";


const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
              Exam Management System
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink 
                  href="https://www.upliftcodecamp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-lighter">
                  Terms and Conditions
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    href="https://www.upliftcodecamp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    href="https://facebook.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    Facebook
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    href="https://linkedin.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    Linked-In
                  </NavLink>
                </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;