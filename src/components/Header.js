import { useState, useContext, useReducer } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "login";
  let [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="nav border-solid border-4">
      <div className="flex justify-between items-center">
        <div className="border-solid border-4 w-40">
          <Link to="/"><img className="w-35"  src={LOGO_URl} /></Link>
        </div>
        <div className="nav-items border-solid border-4 w-[600px]">
          <ul className="flex justify-between">
            <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="p-4">{loggedInUser}</li>
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
              <Link to="/cart">Cart-{cartItems.length}</Link>
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
