import React, { useState } from 'react';
import Style from './../../modules/GlobalStyling.module.css';
import inStyle from './../../modules/Body/FAQs.module.css';
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';

import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function FAQs({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][SingleQnA][populate]=*`;
  const [post, setPost] = React.useState(null);
  const [state, setstate] = useState(false);

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

  if (!post) return null;
  return (
    <div
      className={
        post.Grey_Background == true
          ? inStyle.Grey_BackgroundBox
          : inStyle.White_BackgroundBox
      }
    >
      <div className={inStyle.wrapper}>
        <div className={inStyle.container}>
          <div className={inStyle.header1}>
            <div className={inStyle.hr}></div>
            <div className={inStyle.Heading}>{post.Heading}</div>
            <div className={inStyle.hr}></div>
          </div>
          {post.SingleQnA.map((value, key) => {
            return (
              <div key={key} className={inStyle.content}>
                <div
                  className={inStyle.header}
                  onClick={() => {
                    setstate(!state);
                    value.status = state;
                  }}
                >
                  <div className={inStyle.subHeader}>
                    <ReactMarkdown>{'Q. ' + value.Question}</ReactMarkdown>
                  </div>
                  <div>
                    {value.status ? (
                      <AiOutlineMinus className={inStyle.reactIcon} />
                    ) : (
                      <BsPlus className={inStyle.reactIcon} />
                    )}
                  </div>
                </div>
                <div className={value.status ? inStyle.view : inStyle.hide}>
                  <ReactMarkdown>{'A. ' + value.Answer}</ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
