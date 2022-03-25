import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import SocilaLine from './Footer/SocialLine';

import Style from './../modules/Footer/NewFooter.module.css';
export default function Footer() {
  const pageId = process.env.REACT_APP_STRAPI_HOME_PAGE_ID;
  const baseURL = `http://localhost:1337/api/hey-himalayas/${pageId}?populate[Footer][populate]=*`;
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const preparedData = response.data.data.attributes.Footer[0];
        setdata(preparedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.Footer_Title}>Find Us</div>
        <div>
          <SocilaLine />
        </div>
        <div className={Style.Footer_Context}>
          <ReactMarkdown>{data.Content}</ReactMarkdown>
        </div>
        <div className={Style.Footer_Copyright}>
          <ReactMarkdown>{data.Copy_Right_Text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import classes from "./../modules/Footer/Footer.module.css";
// import SocilaLine from "./Footer/SocialLine";
// import axios from "axios";

// export default function Footer() {
//   const baseURL =
//     "http://localhost:1337/api/hey-himalayas/1?populate[Footer][populate]=*";
//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     axios
//       .get(baseURL)
//       .then((response) => {
//         const preparedData = response.data.data.attributes.Footer[0];
//         setdata(preparedData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   if (!data) {
//     return <h3>Loading...</h3>;
//   } else {
//     const logoImg = "http://localhost:1337" + data.Logo.data.attributes.url;
//     const social = data.Social_Buttons;
//     return (
//       <section className={` col-12 ${classes.cointainer}`}>
//         <div className={`col-11 md-col-10 ${classes.logoBar}`}>
//           <div
//             className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
//           ></div>
//           <div className={` col-2 md-col-3 sm-col-5 ${classes.thrilloLogo}`}>
//             <img className={`${classes.imgLogo}`} src={logoImg} alt="Logo" />
//           </div>
//           <div
//             className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
//           ></div>
//         </div>

//         <SocilaLine data={social} marginVertical={"20px"} />

//         <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
//           <b>{data.Copy_Right_Text}</b>
//         </p>
//         <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
//           {data.Content}
//         </p>
//       </section>
//     );
//   }
// }
