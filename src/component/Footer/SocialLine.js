import React, { useState, useEffect } from 'react';
import Styles from './../../modules/responsive.module.css';
import classes from './../../modules/Footer/SocialLine.module.css';
import axios from 'axios';
// import {
//   BsFacebook,
//   BsLinkedin,
//   BsInstagram,
//   BsYoutube,
//   BsTwitter,
// } from "react-icons/bs";

export default function SocilaLine({ marginVertical }) {
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Footer][populate][Social_Buttons][populate]=*';
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const preparedData =
          response.data.data.attributes.Footer[0].Social_Buttons;
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
    <div className={classes.wrapper}>
      <div
        style={{ margin: `${marginVertical} 0` }}
        className={` ${classes.cointainer}`}
      >
        {data.map((data, index) => {
          const img = 'http://localhost:1337' + data.Icon.data.attributes.url;
          return (
            <a key={index} href={data.link}>
              <img
                style={{ height: '18px', width: '18px' }}
                src={img}
                alt={data.Socila_media_name}
                className={classes.Icon_container}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
// ${Styles.col_3} ${Styles.md_col_4} ${Styles.sm_col_6}
