import react, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './../../modules/Body/DisplayRow.module.css';
import OneCard from './OneCard';
import uniStyle from './../../modules/index.module.css';
import ReactMarkdown from 'react-markdown';

export default function DisplayRow({ id, pageType, pageId }) {
  const baseURL = `http://localhost:1337/api/${pageType}/${pageId}?populate[Content][populate][product_cards][populate]=*`;
  const [post, setPost] = useState(null);
  let products = [];
  useEffect(() => {
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
    <div className={classes.sectionContainer}>
      <div className={classes.header}>
        <div className={classes.hr}></div>
        <div className={classes.Heading}>{post.Heading}</div>
        <div className={classes.hr}></div>
      </div>
      <div className={classes.Description}>
        <ReactMarkdown>{post.Heading_description}</ReactMarkdown>
      </div>
      <div className={classes.rowContainer}>
        <div
          className={classes.longDiv}
          style={{
            width: `${
              220 * post.product_cards.data.length +
              post.product_cards.data.length * 10
            }px`,
          }}
        >
          {post.product_cards.data.map((k, i) => {
            return (
              <OneCard
                key={i}
                name={k.attributes.name}
                price={k.attributes.orignal_price}
                currentPrice={k.attributes.discounted_price}
                rating={k.attributes.rating}
                review_count={k.attributes.review_count}
                image={k.attributes.link}
                productId={k.attributes.product_code}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
