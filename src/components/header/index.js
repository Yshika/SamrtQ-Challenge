import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.scss";
const Header = () => {
  return (
    <header className="header-main">
      <Link to="/" className="header-logo">
        <img src={logo} alt="SmartQ logo" className="header-logo-img" />
      </Link>
    </header>
  );
};

export default Header;
