import React from 'react';
import axios from 'axios';
import Style from './../../modules/Body/ProductBanner.module.css';
// import img from './../../assets/banner_1.png';
// import img1 from './../../assets/Ban1.jpeg';
// import img2 from './../../assets/Ban2.jpeg';
import Slider from 'react-slick';

export default function ProductBanner({ id }) {
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Content][populate]=*';
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[id]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) return <div>null</div>;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: 'button__bar',
    arrows: false,
  };

  // const settingsWithModules = {
  //   ...settings,
  //   dotsClass: Style.button__bar,
  // };

  console.log(post);

  return (
    <div className={Style.wrapper}>
      <Slider {...settings}>
        {post.Images.data.map((value, key) => {
          return (
            <div key={key} className={Style.imageContainer}>
              <img src={`http://localhost:1337${value.attributes.url}`} />
            </div>
          );
        })}
        {/* <div>
          <img src={img} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div> */}
      </Slider>

      <div className={Style.Container}>
        <div className={Style.content}>
          <div className={Style.Banner_Title}>{post.Title}</div>
          <div className={Style.Banner_Content}>{post.SubTitle}</div>
          <div className={Style.ck_btn}>{post.Action_Button.Link_Name}</div>
        </div>
      </div>
    </div>
  );
}
