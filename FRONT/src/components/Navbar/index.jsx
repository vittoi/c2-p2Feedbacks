import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./style.css";

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
          <Navbar.Brand href="http://uxtools.uxleris.net">
            <div class="div-lab-logo">
              <span class="lab-logo">
                <img
                  alt=""
                  src="http://uxtools.uxleris.net/img/icons/uxleris-logo.png"
                  width="50"
                /> {'  '}
              </span>

              <div class="lab-infs">
                <span class="lab-name">UXTools
                  <span> by UXLeris</span>
                </span>
                <span class="lab-desc"> User Experience Laboratory Of Studies In Networks, Innovation and Software </span>
              </div>
            </div>
          </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
