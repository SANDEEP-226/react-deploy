import React, { useState } from 'react';
import Style from './../../modules/Body/FeatureTemplate.module.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import img from '../../assets/Ban4.jpeg';
import ReactMarkdown from 'react-markdown';
// import data from '../../Json/Feature.json';

export default function FeatureTemplate({ id, content, url }) {
  const [state, setstate] = useState(false);
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.imageContainer}>
          <img src={img} />
        </div>
        <div className={Style.contentContainer}>
          <div className={Style.content}>
            <ReactMarkdown>
              {state ? content : content.substring(0, 800)}
            </ReactMarkdown>
          </div>
          <div onClick={() => setstate(!state)} className={Style.readMore2}>
            <div>
              {content.length < 200 ? null : state ? 'Read Less' : 'Read More'}
            </div>
            <div>
              {content.length < 200 ? null : <HiOutlineArrowNarrowRight />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
