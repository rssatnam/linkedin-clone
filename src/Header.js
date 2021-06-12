import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://scontent.flko3-1.fna.fbcdn.net/v/t1.6435-1/p320x320/154959494_4040245626018229_4461563458197786994_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=_79XVgquvBIAX90GJ6L&_nc_ht=scontent.flko3-1.fna&tp=6&oh=65b982a021b57e79ab3b75edce1c8edb&oe=60C8E4FD"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
