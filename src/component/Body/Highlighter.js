import React, { useEffect } from 'react';
import axios from 'axios';
import Style from './../../modules/Body/Highlighter.module.css';
import { useState } from 'react';
import FeatureTemplate from './FeatureTemplate';
import { getStrapiData } from './../hooks/useFetch';

var toggleArray = [];
function toggle(key, toggleArray) {
  toggleArray.fill(false);
  toggleArray[key] = true;
  console.log(toggleArray[key], '------------------');
}

export default function Highlighter({ id }) {
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [state, setstate] = useState('');
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][Tabs][populate][Tab_content][populate]=*';
  useEffect(async () => {
    await axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[id]);
        toggleArray = new Array(post.Tabs.length).fill(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!post) return null;

  return (
    <div className={Style.row}>
      <div className={Style.header}>
        <div className={Style.hr}></div>
        <div className={Style.title}>{post.Heading}</div>
        <div className={Style.hr}></div>
      </div>
      <div className={Style.highlighterList}>
        <ul>
          {post.Tabs.map((value, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  setstate(value.Tab_name);
                  setContent(value.Tab_content.Content);
                  setUrl(value.Tab_content.Image.data.attributes.url);
                  toggle(key, toggleArray);
                }}
                className={toggleArray[key] ? Style.active : null}
              >
                {value.Tab_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={Style.FeatureContainer}>
        <FeatureTemplate content={content} url={url} />
      </div>
    </div>
  );
}

// setstate(response.data.data.attributes.Content[id].Tabs[0].Tab_name);
// setContent(
//   response.data.data.attributes.Content[id].Tabs[0].Tab_content.Content
// );
// setUrl(
//   'https://localhost:1337' +
//     response.data.data.attributes.Content[id].Tabs[0].Tab_content.Image.data
//       .attributes.url
// );
function Switch(state, content, url) {
  switch (state) {
    case 'Travel Essential':
      return <FeatureTemplate id="0" content={content} url={url} />;
    case 'Major Attractions':
      return <FeatureTemplate id="1" content={content} url={url} />;
    case 'Must Dos in dubai':
      return <FeatureTemplate id="2" content={content} url={url} />;
    case 'Best Time to Vist':
      return <FeatureTemplate id="3" content={content} url={url} />;
    case 'Stay':
      return <FeatureTemplate id="4" content={content} url={url} />;
    case 'Food':
      return <FeatureTemplate id="5" content={content} url={url} />;
    default:
      return 'Nothing';
  }
}
