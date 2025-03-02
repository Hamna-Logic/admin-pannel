import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/nav-bar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="sidebar-container">
        <Sidebar />
        </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
