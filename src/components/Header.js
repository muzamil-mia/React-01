import { LOGO_URl } from "../utils/constants";

const Header = () => {
  return (
    <div className="nav">
      <div className="header">
        <div>
          <img
            src={LOGO_URl}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;