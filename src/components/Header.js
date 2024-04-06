import { useState } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "login";
  let [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="nav">
      <div className="header">
        <div>
          <img src={LOGO_URl} />
        </div>
        <div className="nav-items">
          <ul>
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to = "/grocerry">Grocerry</Link>
          </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* never use anchor tag here as it will reload the whole page  use link instead*/}
            {/* <li><a href="/about">About</a></li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li><Link to="/cart">Cart</Link></li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  // btnName = "logout";
                  //setBtnName("logout");
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
