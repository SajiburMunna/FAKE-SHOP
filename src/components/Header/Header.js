import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
//  import App, { UserContext } from './../../App';
import { useAuth } from "../Login/useAuth";
// import { Link } from "react-router-dom";

const Header = () => {
  //  const user=useContext(UserContext);

  const auth = useAuth();
  return (
    <div className="h">
      <div className="header">
        <img src={logo} alt="" />
        <nav>
          <a href="/shop">Shop</a>

          <a href="/oder">OderReview</a>

          <a href="/manager">ManageInventory</a>
          {auth.user && <span style={{ color: "red" }}>{auth.user.name}</span>}
          {auth.user ? (
            <a href="/login"> signOut </a>
          ) : (
            <a href="/login"> signIn </a>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
