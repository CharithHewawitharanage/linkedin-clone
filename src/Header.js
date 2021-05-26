import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="http://akaranachambers.co.nz/wp-content/uploads/2017/06/LinkedIn-Logo.png"
          alt="LinkedIn-Clone"
        />
        <div className="header__search">
          <SearchIcon /> <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={SmsIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions
          title="Me"
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQHxCcsL2XHUIw/profile-displayphoto-shrink_100_100/0/1516587331092?e=1626307200&v=beta&t=sOFlEn5L_PUs4e2KnLfYIKwlX_a-KXfVjFvMfUOWELU"
          onClick={logOutApp}
        />
      </div>
    </div>
  );
}

export default Header;
