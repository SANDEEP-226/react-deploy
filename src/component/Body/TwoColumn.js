import React, { useState, useEffect } from 'react';
import axios from 'axios';
import root from '../../modules/responsive.module.css';
import Style from './../../modules/Body/Column.module.css';
import Card from './Card';
import { getStrapiData } from './../hooks/useFetch';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

export default function TwoColumn({ id, pageType, pageId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][Cards][populate]=*`;

  const baseURLQuery = 'populate[Content][populate][Cards][populate]=*';
  useEffect(() => {
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

  // if (loading) return <div> loading... </div>;
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
          <div className={Style.title}>
            <ReactMarkdown>{post.Heading}</ReactMarkdown>
          </div>
          <div className={Style.hr}></div>
        </div>
        <div className={Style.columnContainer}>
          {post.Cards.map((value, key) => {
            return (
              <div className={`${Style.TwoColumn}`} key={key}>
                <Card type="twoColumn" value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TwoColumnContent({ data }) {
  const [state, setstate] = useState(false);
  return (
    <div className={Style.TwoColumnContentContainer}>
      <ReactMarkdown>{state ? data : data.substring(0, 500)}</ReactMarkdown>
      <div onClick={() => setstate(!state)} className={Style.readMore2}>
        <div>
          {data.length < 200 ? null : state ? 'Read Less' : 'Read More'}
        </div>
        <div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </div>
  );
}
