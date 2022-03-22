import React from "react";
// import "./../../modules/responsive.css"
import classes from "./../../modules/Footer/SocialLine.module.css";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

export default function SocilaLine({ marginVertical }) {
  return (
    <div
      style={{ margin: `${marginVertical} 0` }}
      className={`col-3 md-col-4 sm-col-6 ${classes.cointainer}`}
    >
      <BsFacebook className={classes.icons} />
      <BsInstagram className={classes.icons} />
      <BsLinkedin className={classes.icons} />
      <BsTwitter className={classes.icons} />
      <BsYoutube className={classes.icons} />
    </div>
  );
}
