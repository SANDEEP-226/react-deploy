import React, { useEffect } from 'react';
import axios from 'axios';
import Style from './../../modules/Body/Highlighter.module.css';
import { useState } from 'react';
import FeatureTemplate from './FeatureTemplate';
import { getStrapiData } from './../hooks/useFetch';
import ReactMarkdown from 'react-markdown';
var toggleArray = [];
function toggle(key, toggleArray) {
  toggleArray.fill(false);
  toggleArray[key] = true;
}

export default function Highlighter({ id, pageType, pageId }) {
  const [post, setPost] = useState(null);
  const [state, setstate] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][tab][populate][Image][populate]=*`;
  useEffect(async () => {
    await axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content[id]);
        let post = response.data.data.attributes.Content[id];
        let firstCard = post.tab[0];
        setstate(firstCard.Tab_name);
        setContent(firstCard.Content);
        setUrl(firstCard.Image.data.attributes.url);
        toggleArray = new Array(post.tab.length).fill(false);
        toggleArray[0] = true;

        document.getElementById('highlight-card-1').click();
        document.getElementById('highlight-card-2').click();
        document.getElementById('highlight-card-1').click();
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
        <div className={Style.HeadingText}>{post.Heading}</div>
        <div className={Style.hr}></div>
      </div>
      <div className={Style.Description}>
        <ReactMarkdown>{post.Heading_description}</ReactMarkdown>
      </div>
      <div className={Style.highlighterList}>
        <ul className={Style.highlighterItems}>
          {post.tab.map((value, key) => {
            return (
              <li
                id={`highlight-card-${key + 1}`}
                key={key}
                onClick={() => {
                  setstate(value.Tab_name);
                  setContent(value.Content);
                  setUrl(value.Image.data.attributes.url);

                  toggle(key, toggleArray);
                }}
                className={toggleArray[key] && Style.active}
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
