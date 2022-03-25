import React from 'react';
import Style from './../../modules/Body/QuickLinks.module.css';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function QuickLinks({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][One_Category][populate]=*`;
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
  return (
    <div
      className={
        post.Grey_Background == true
          ? Style.Grey_BackgroundBox
          : Style.White_BackgroundBox
      }
    >
      <div className={Style.wrapper}>
        <div className={Style.header}>
          <div className={Style.hr}></div>
          <div>
            <ReactMarkdown>{post.Heading}</ReactMarkdown>
          </div>
          <div className={Style.hr}></div>
        </div>
        <div className={Style.container}>
          {post.One_Category.map((value, key) => {
            return (
              <div className={Style.content} key={key}>
                <div className={Style.subHeader}>{value.Category_Name}</div>
                <ul>
                  {value.Links.map((val, key) => {
                    return (
                      <a key={key} href={val.Link_Url}>
                        <li>{val.Link_Name}</li>
                      </a>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
