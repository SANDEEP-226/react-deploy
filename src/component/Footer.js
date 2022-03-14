// import FootCard from "./FootCard";
// import Style from "./../modules/responsive.module.css";
import classes from "./../modules/Footer/Footer.module.css";
import SocilaLine from "./Footer/SocialLine";
import img from "../assets/ThrillophilliaDark.png"
// import { useQuery, gql } from "@apollo/client";

export default function Footer() {
  // let img = "../../assets/ThrillophilliaDark.png";

  // const query = gql`
  //   query {
  //     homePage(id: 1) {
  //       data {
  //         attributes {
  //           Footer {
  //             Copy_Right_Text
  //             Credits
  //             Light_Logo {
  //               data {
  //                 attributes {
  //                   url
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  // const { loading, error, data } = useQuery(query);

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }
  // if (error) {
  //   console.log("error occored");
  //   return <h1>error</h1>;
  // }

  if (true) {
    // const dataObject = data.homePage.data.attributes.Footer;
    // const imgName = dataObject.Light_Logo.data.attributes.url;
    // const image = `http://localhost:1337${imgName}`;

    return (
      <section className={` col-12 ${classes.cointainer}`}>
        {/* <FootCard/> */}

        <div className={`col-11 md-col-10 ${classes.logoBar}`}>
          <div
            className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
          ></div>
          <div className={` col-2 md-col-3 sm-col-5 ${classes.thrilloLogo}`}>
            <img className={`${classes.imgLogo}`} src={img} alt="Logo"/>
          </div>
          <div
            className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
          ></div>
        </div>
        <SocilaLine marginVertical={"20px"} />

        <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
          <b>&copy; 2022 Thrillophilia.com All rights reserved.</b>
        </p>
        <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
        The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </p>
      </section>
    );
  }
}
