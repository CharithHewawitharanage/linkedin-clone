import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import "./Post.css";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar alt="" className="" component="div" sizes="" src={photoUrl}>
          {name[0]}
        </Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpAltOutlinedIcon} color="grey" />
        <InputOption title="Comment" Icon={ChatOutlinedIcon} color="grey" />
        <InputOption title="Share" Icon={ShareOutlinedIcon} color="grey" />
        <InputOption title="Send" Icon={SendOutlinedIcon} color="grey" />
      </div>
    </div>
  );
});

export default Post;
