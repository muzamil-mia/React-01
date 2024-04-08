import { useState } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "login";
  let [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="nav border-solid border-4">
      <div className="flex justify-between items-center">
        <div className="border-solid border-4 w-40">
          <img className="w-35"  src={LOGO_URl} />
        </div>
        <div className="nav-items border-solid border-4 w-[600px]">
          <ul className="flex justify-between">
            <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li  className="p-4">
              <Link to="/grocerry">Grocerry</Link>
            </li>
            <li  className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li  className="p-4">
              <Link to="/contact">Contact</Link>
            </li>
            {/* never use anchor tag here as it will reload the whole page  use link instead*/}
            {/* <li><a href="/about">About</a></li> */}
            <li  className="p-4">
              <Link to="/about">About</Link>
            </li>
            <li  className="p-4">
              <Link to="/cart">Cart</Link>
            </li>
            <li  className="p-4">
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
