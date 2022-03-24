import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TwoColumn from './Body/TwoColumn';
import ThreeColumn from './Body/ThreeColumn';
import FourColumn from './Body/FourColumn';
import Style from './../modules/Body/Body.module.css';
import FeatureCard from './Body/FeatureCard';
import FAQs from './Body/FAQs';
import QuickLinks from './Body/QuickLinks';

export default function PageBody() {
  const params = useParams();
  const { routeName, pageId } = params;

  const baseURL = `http://localhost:1337/api/sub-pages/${pageId}?populate=*`;
  const [post, setPost] = useState(null);
  const [isValid, setisValid] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const homePageId = process.env.REACT_APP_STRAPI_HOME_PAGE_ID;
        const linkedHomeId = response.data.data.attributes.home_page.data.id;
        const gotRouteName = response.data.data.attributes.Route_Name;
        // console.log(gotRouteName + ' ' + routeName);
        if (homePageId == linkedHomeId && gotRouteName == routeName) {
          setisValid(true);
        }
        setPost(response.data.data.attributes.Content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getColumn(size, key) {
    switch (size) {
      case 'Two_column_layout':
        return <TwoColumn id={key} pageType="sub-pages" pageId={pageId} />;
      case 'Three_column_layout':
        return <ThreeColumn id={key} pageType="sub-pages" pageId={pageId} />;
      case 'Four_column_layout':
        return <FourColumn id={key} pageType="sub-pages" pageId={pageId} />;
      default:
        return '';
    }
  }

  function getComponent(name, variant, key) {
    switch (name) {
      case 'basic-card-component':
        return getColumn(variant, key);
      case 'half-half':
        return <FeatureCard id={key} pageType="sub-pages" pageId={pageId} />;

      case 'qn-a':
        return <FAQs id={key} pageType="sub-pages" pageId={pageId} />;

      case 'quick-links':
        return <QuickLinks id={key} pageType="sub-pages" pageId={pageId} />;

      default:
        return 'NULL';
    }
  }

  if (!post) {
    return null;
  }
  if (!isValid) {
    return <h1>401 unauthorized access</h1>;
  }
  return (
    <div>
      {post.map((value, key) => {
        return (
          <div key={key} className={Style.wrapper}>
            {getComponent(value.__component.substring(9), value.Variant, key)}
          </div>
        );
      })}
    </div>
  );
}
