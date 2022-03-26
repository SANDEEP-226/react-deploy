import React from 'react';
import axios from 'axios';
import Style from './../../modules/Body/ProductBanner.module.css';
import Slider from 'react-slick';

export default function ProductBanner({ data }) {
  const imgArr = data.gallery_media;
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Content][populate]=*';
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[1]);
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

  return (
    <div className={Style.wrapper}>
      <Slider {...settings}>
        {imgArr.map((value, key) => {
          return (
            <div key={key} className={Style.imageContainer}>
              <img src={value.media_urls.original} />
            </div>
          );
        })}
      </Slider>

      <div className={Style.Container}>
        <div className={Style.content}>
          <div className={Style.Banner_Title}>{data.name}</div>
        </div>
      </div>
    </div>
  );
}
