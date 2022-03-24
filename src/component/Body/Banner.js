import React, { useState } from 'react';
import axios from 'axios';
import ProductBanner from './ProductBanner';
export default function Banner() {
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Nav][populate]=*';
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Nav);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) return <div>Null</div>;

  if (post.length > 1)
    return (
      <div>
        <ProductBanner data={post[1]} />
      </div>
    );
}
