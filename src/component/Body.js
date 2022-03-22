import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TwoColumn from './Body/TwoColumn';
import ThreeColumn from './Body/ThreeColumn';
import FourColumn from './Body/FourColumn';
import Style from './../modules/Body/Body.module.css';
import FeatureCard from './Body/FeatureCard';
import Highlighter from './Body/Highlighter';
import FAQs from './Body/FAQs';
import QuickLinks from './Body/QuickLinks';
import ProductBanner from './Body/ProductBanner';
import FourCard from './Body/FourCard';

function getColumn(size, key) {
  // console.log(key);
  switch (size) {
    case 'Large':
      return <TwoColumn id={key} />;
    case 'Medium':
      return <ThreeColumn id={key} />;
    case 'Small':
      return <FourColumn id={key} />;
    default:
      return '';
  }
}

function getComponent(name, variant, key) {
  switch (name) {
    case 'basic-card-component':
      return getColumn(variant, key);
    case 'half-half':
      return <FeatureCard id={key} />;

    case 'qn-a':
      return <FAQs id={key} />;

    case 'quick-links':
      return <QuickLinks id={key} />;

    default:
      return 'NULL';
  }
}

export default function Body() {
  const baseURL = 'http://localhost:1337/api/hey-himalayas/1?populate=*';
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) {
    return null;
  }
  return (
    <div className={Style.wrapper}>
      <ProductBanner />
      {post.map((value, key) => {
        return (
          <div key={key} className={Style.wrapper}>
            {getComponent(value.__component.substring(9), value.Variant, key)}
          </div>
        );
      })}
      <Highlighter />
    </div>
  );
}

{
  /* <TwoColumn/>
        <ThreeColumn/>
        <FourColumn/>
        <br/>
        <br/>
        <br/>
        <FeatureCard/>
        <br/>
        <br/>
        <Highlighter/>
        <br/>
        <FAQs/>
        <QuickLinks/> */
}
