import React from 'react';
import Style from './../../modules/Body/FeatureCard.module.css';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function FeatureCard({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][Image][populate]=*`;
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[id]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!post) return null;
  const img = 'http://localhost:1337' + post.Image.data.attributes.url;
  if (post.Variant == 'Left_Image') {
    return (
      <div
        className={
          post.Grey_Background == true
            ? Style.Grey_BackgroundBox
            : Style.White_BackgroundBox
        }
      >
        <div className={`${Style.wrapper} `}>
          <div className={Style.header}>
            <div className={Style.hr}></div>
            <div>
              <ReactMarkdown>{post.Heading}</ReactMarkdown>
            </div>
            <div className={Style.hr}></div>
          </div>
          <div className={Style.container}>
            <div className={Style.imageContainer}>
              <img src={img} />
            </div>
            <div className={Style.contentContainer}>
              <ReactMarkdown>{post.Content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        post.Grey_Background == true
          ? Style.Grey_BackgroundBox
          : Style.White_BackgroundBox
      }
    >
      <div className={`${Style.wrapper} `}>
        <div className={Style.header}>
          <div className={Style.hr}></div>
          <div>
            <ReactMarkdown>{post.Heading}</ReactMarkdown>
          </div>
          <div className={Style.hr}></div>
        </div>
        <div className={Style.container}>
          <div className={Style.contentContainer}>
            <ReactMarkdown>{post.Content}</ReactMarkdown>
          </div>
          <div className={Style.imageContainer}>
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}
