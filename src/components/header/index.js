import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.scss";
const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <header className="header-main">
      <Link to="/" className="header-logo">
        <img src={logo} alt="SmartQ logo" className="header-logo-img" />
      </Link>
      {location?.pathname == "/" ? (
        <span className="header-search">
          <input type="text" />
        </span>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
