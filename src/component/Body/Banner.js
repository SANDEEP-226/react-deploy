import React, { useState } from 'react';
import axios from 'axios';
import ProductBanner from './ProductBanner';
export default function Banner({ id }) {
  const baseURL =
    'http://localhost:1337/api/hey-himalayas/1?populate[Content][populate]=*';
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

  if (!post) return <div>null</div>;

  return (
    <div>
      <ProductBanner data={post[0]} />
    </div>
  );
}
