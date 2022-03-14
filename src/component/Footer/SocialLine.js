import React, { useState, useEffect } from "react";
import Styles from "./../../modules/responsive.module.css";
import classes from "./../../modules/Footer/SocialLine.module.css";
import axios from "axios";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

export default function SocilaLine({ marginVertical }) {
  const baseURL =
    "http://localhost:1337/api/hey-himalayas/1?populate[Footer][populate][Social_Buttons][populate]=*";
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const preparedData =
          response.data.data.attributes.Footer[0].Social_Buttons;
        console.log(JSON.stringify(preparedData));
        setdata(preparedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div
      style={{ margin: `${marginVertical} 0` }}
      className={`${Styles.col_3} ${Styles.md_col_4} ${Styles.sm_col_6} ${classes.cointainer}`}
    >
      {data.map((data, index) => {
        console.log(data);
        const img = "http://localhost:1337" + data.Icon.data.attributes.url;
        return (
          <img
            style={{ height: "18px", width: "18px" }}
            src={img}
            alt={data.Socila_media_name}
          />
        );
      })}

      {/*<BsFacebook className={classes.icons} />
      <BsInstagram className={classes.icons} />
      <BsLinkedin className={classes.icons} />
      <BsTwitter className={classes.icons} />
      <BsYoutube className={classes.icons} />
  */}
    </div>
  );
}
