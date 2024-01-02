import NavBar from "../components/NavBar"
import "../styles/Header.css";

const Header = () => {

  return (
    <div className="header">
      <div className="web-menu">
        <NavBar />
      </div>
      {/* TODO: Mobile Menu */}
    </div>
  );
}

export default Header;