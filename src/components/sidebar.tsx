import { useState } from "react";
import logo from "./image.png";
import "./styles.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar">
          <div className="brand">
            {/* <img src={logo} alt="WasteEase Logo" /> */}
            <span className="brand-text">WasteEase</span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#home">
                <i className="fas fa-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-tools"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fas fa-circle-info"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-phone"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
