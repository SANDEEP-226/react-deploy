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
import Footer from './Footer';
import TextComponent from './Body/TextComponent';

function getColumn(size, key) {
  switch (size) {
    case 'Two_column_layout':
      return <TwoColumn id={key} />;
    case 'Three_column_layout':
      return <ThreeColumn id={key} />;
    case 'Four_column_layout':
      return <FourColumn id={key} />;
    default:
      return '';
  }
}

function getComponent(name, variant, key) {
  switch (name) {
    case 'image-carousel':
      return <ProductBanner id={key} />;
    case 'basic-card-component':
      return getColumn(variant, key);
    case 'half-half':
      return <FeatureCard id={key} />;

    case 'qn-a':
      return <FAQs id={key} />;

    case 'quick-links':
      return <QuickLinks id={key} />;

    case 'tab-highlighter':
      return <Highlighter id={key} />;
    case 'only-text':
      return <TextComponent id={key} />;
    default:
      return 'NULL';
  }
}

export default function Body() {
  const pageId = process.env.REACT_APP_STRAPI_HOME_PAGE_ID;
  const baseURL = `http://localhost:1337/api/hey-himalayas/${pageId}?populate=*`;
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

  function getColumn(size, key) {
    switch (size) {
      case 'Two_column_layout':
        return <TwoColumn id={key} />;
      case 'Three_column_layout':
        return <ThreeColumn id={key} pageType="hey-himalayas" />;
      case 'Four_column_layout':
        return <FourColumn id={key} pageType="hey-himalayas" />;
      default:
        return '';
    }
  }

  function getComponent(name, variant, key) {
    switch (name) {
      case 'basic-card-component':
        return getColumn(variant, key);
      case 'half-half':
        return (
          <FeatureCard id={key} pageType="hey-himalayas" pageId={pageId} />
        );

      case 'qn-a':
        return <FAQs id={key} pageType="hey-himalayas" pageId={pageId} />;

      case 'quick-links':
        return <QuickLinks id={key} pageType="hey-himalayas" pageId={pageId} />;

      case 'tab-highlighter':
        return <Highlighter id={key} />;
      case 'only-text':
        return <TextComponent id={key} />;

      default:
        return 'NULL';
    }
  }

  if (!post) {
    return null;
  }
  return (
    <div className={Style.wrapper}>
      {/* <ProductBanner /> */}

      {post.map((value, key) => {
        return (
          <div key={key} className={Style.container}>
            {getComponent(value.__component.substring(9), value.Variant, key)}
          </div>
        );
      })}
    </div>
  );
}
