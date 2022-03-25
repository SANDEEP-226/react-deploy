import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Style from './../../modules/Body/Column.module.css';
import root from '../../modules/responsive.module.css';
import Card from './Card';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function ThreeColumn({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][Cards][populate]=*`;
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

  if (!post) return null;
  return (
    <div
      className={
        post.Grey_Background == true
          ? Style.Grey_BackgroundBox
          : Style.White_BackgroundBox
      }
    >
      <div
        className={`${Style.row} ${root.md_col_11} ${root.sm_col_10} ${root.tb_col_10} ${root.col_10}  ${root.l_col_11}`}
      >
        <div className={Style.header}>
          <div className={Style.hr}></div>
          <div>
            <ReactMarkdown>{post.Heading}</ReactMarkdown>
          </div>
          <div className={Style.hr}></div>
        </div>
        <div className={Style.columnContainer}>
          {post.Cards.map((value, key) => {
            return (
              <div className={Style.ThreeColumn} key={key}>
                <Card type="threeColumn" value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ThreeColumnContent({ data }) {
  const [state, setstate] = useState(false);

  return (
    <div className={Style.ThreeColumnContentContainer}>
      <ReactMarkdown>{state ? data : data.substring(0, 200)}</ReactMarkdown>
      <div onClick={() => setstate(!state)} className={Style.readMore3}>
        <div>
          {data.length < 200 ? null : state ? 'Read Less' : 'Read More'}
        </div>
        <div>{data.length < 200 ? null : <HiOutlineArrowNarrowRight />}</div>
      </div>
    </div>
  );
}
