import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import logo from "./image.png";
import "./styles.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="admin-navbar">
      <Container fluid className="justify-content-end">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Brand Logo"
          />
          <span className="fw-bold fs-4 text-dark">WasteEase</span>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <NavDropdown
            title={<i className="fas fa-user-circle fa-lg"></i>}
            id="adminDropdown"
            align="end"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="#admin-dashboard">
              <i className="fas fa-gauge"></i> Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item href="#manage-users">
              <i className="fas fa-users"></i> Manage Users
            </NavDropdown.Item>
            <NavDropdown.Item href="#settings">
              <i className="fas fa-cog"></i> Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">
              <i className="fas fa-sign-out-alt"></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;