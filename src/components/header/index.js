import logo from "../../assets/logo.png";
import "./style.scss";
const Header = () => {
  return (
    <header className="header-main">
      <span className="header-logo">
        <img src={logo} alt="SmartQ logo" className="header-logo-img" />
      </span>
      <span className="header-search">
        <input type="text" />
      </span>
    </header>
  );
};

export default Header;
