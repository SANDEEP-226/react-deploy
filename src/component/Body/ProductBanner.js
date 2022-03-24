import React from 'react';
import Style from './../../modules/Body/ProductBanner.module.css';
import img from './../../assets/banner_1.png';
import img1 from './../../assets/Ban1.jpeg';
import img2 from './../../assets/Ban2.jpeg';
import Slider from 'react-slick';

export default function ProductBanner({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: 'button__bar',
    arrows: false,
  };

  const settingsWithModules = {
    ...settings,
    dotsClass: Style.button__bar,
  };

  return (
    <div className={Style.wrapper}>
      <Slider {...settings}>
        {/* {data.Images.data.map((value, key) => {
          return (
            <div key={key}>
              <img src={`http://localhost:1337${value.attributes.url}`} />
            </div>
          );
        })} */}
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Slider>

      <div className={Style.Container}>
        <div className={Style.content}>
          <div className={Style.Banner_Title}>{data.Title}</div>
          <div className={Style.Banner_Content}>{data.SubTitle}</div>
          <div className={Style.ck_btn}>{data.Action_Button.Link_Name}</div>
        </div>
      </div>
    </div>
  );
}
