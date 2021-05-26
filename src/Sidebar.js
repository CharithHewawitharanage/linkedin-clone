import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* {user.photo} */}
        <img
          src="https://media-exp1.licdn.com/dms/image/C5116AQEg2Yo-rSb03A/profile-displaybackgroundimage-shrink_200_800/0/1547098111694?e=1626912000&v=beta&t=PN7H7jmDidHAajVlSCB7om-lyTh6-wAwBLBjML57uJI"
          alt=""
        />
        <Avatar
          alt=""
          className="sidebar__avatar"
          component="div"
          sizes=""
          src={user.photoUrl}
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <p className="sidebar__techs">
          Web Developer at Lakion| Full Stack Engineer | Front End Specialist |
          PHP | C# | AngularJS|ReactJS/ SEO Optimizer
        </p>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">2,546</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">6,447</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Firebase")}
        {recentItem("Redux")}
        {recentItem("FireStore")}
        {recentItem("HTML")}
        {recentItem("CSS")}
      </div>
    </div>
  );
}

export default Sidebar;
