import React, { useState } from 'react';
import Style from './../../modules/Body/FeatureCard.module.css';
import ReactMarkdown from 'react-markdown';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';

export default function FeatureCard({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][Image][populate]=*`;
  const [state, setstate] = useState(false);
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
            <div className={Style.Heading}>{post.Heading}</div>
            <div className={Style.hr}></div>
          </div>
          <div className={Style.container}>
            <div className={Style.imageContainer}>
              <img src={img} />
            </div>
            <div className={Style.contentContainer}>
              <ReactMarkdown>
                {state ? post.Content : post.Content.substring(0, 300)}
              </ReactMarkdown>
              <div onClick={() => setstate(!state)} className={Style.readMore2}>
                <div>
                  {post.Content.length < 200
                    ? null
                    : state
                    ? 'Read Less'
                    : 'Read More'}
                </div>
                <div className={Style.arrowRight}>
                  {post.Content.length < 200 ? null : (
                    <HiOutlineArrowNarrowRight />
                  )}
                </div>
              </div>
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
          <div className={Style.Heading}>{post.Heading}</div>
          <div className={Style.hr}></div>
        </div>
        <div className={Style.Description}>
          <ReactMarkdown>{post.Heading_description}</ReactMarkdown>
        </div>
        <div className={Style.container}>
          <div className={Style.contentContainer}>
            <ReactMarkdown>
              {state ? post.Content : post.Content.substring(0, 500)}
            </ReactMarkdown>
            <div onClick={() => setstate(!state)} className={Style.readMore2}>
              <div>
                {post.Content.length < 200
                  ? null
                  : state
                  ? 'Read Less'
                  : 'Read More'}
              </div>
              <div className={Style.arrowRight}>
                {post.Content.length < 200 ? null : (
                  <HiOutlineArrowNarrowRight />
                )}
              </div>
            </div>
          </div>
          <div className={Style.imageContainer}>
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}
