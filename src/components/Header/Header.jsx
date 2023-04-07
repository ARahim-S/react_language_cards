import "../Header/Header.css";
import { FaAffiliatetheme } from "react-icons/fa";

const Header = () => {
  let iconStyles = { color: "white", fontSize: "10rem" };
  return (
    <div className="logo-container">
      <div className="header-logo">
        <FaAffiliatetheme style={iconStyles} />
      </div>
    </div>
  );
};

export default Header;
