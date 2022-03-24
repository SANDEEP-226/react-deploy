import React, { useState } from 'react';
import Style from './../../modules/Body/TextComponent.module.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function TextComponent({ id }) {
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Content][populate]=*';
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
    <div className={Style.backgroundColor}>
      <div className={Style.wrapper}>
        <div className={Style.container}>
          <div className={Style.header}>
            <div className={Style.hr}></div>
            <div className={Style.title}>Heading here</div>
            <div className={Style.hr}></div>
          </div>
          <div className={Style.content}>
            <ReactMarkdown>{post.Content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
