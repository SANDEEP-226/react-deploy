import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Style from './../../modules/Body/Column.module.css';
import root from '../../modules/responsive.module.css';
import FourCard from './FourCard';
export default function FourColumn({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][Cards][populate]=*`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[id]);
        console.log(response.data.data.attributes.Content[id]);
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
        <div className={Style.info}>
          Dubai is home to some of the biggest and best theme parks worldwide.
          From daring rides to family-friendly experiences, the city brings a
          variety of options for you to explore. Here is our list of best theme
          park attractions in Dubai worth visiting!
        </div>
        <br />
        <div className={Style.columnContainer}>
          {post.Cards.map((value, key) => {
            return (
              <div className={Style.FourColumn} key={key}>
                <Link to={`/product/${value.id}`}>
                  <FourCard type="fourColumn" value={value} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FourColumnContent({ data }) {
  const [state, setstate] = useState(false);

  return (
    <div className={Style.FourColumnContentContainer}>
      <ReactMarkdown>{state ? data : data.substring(0, 20)}</ReactMarkdown>
      <p onClick={() => setstate(!state)} className={Style.readMore}>
        {data.length < 200 ? null : state ? 'Read Less' : 'Read More'}
      </p>
    </div>
  );
}
