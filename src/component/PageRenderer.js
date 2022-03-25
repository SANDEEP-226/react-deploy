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

export default function PageRenderer() {
  const params = useParams();
  const { routeName } = params;

  const homePageId = process.env.REACT_APP_STRAPI_HOME_PAGE_ID;

  const [post, setPost] = useState(null);
  const [isAvailable, setisAvailable] = useState(false);
  const [pageId, setpageId] = useState(null);

  useEffect(() => {
    const getPageId = async () => {
      let pageId = null;
      try {
        const response = await axios.get(
          `http://localhost:1337/api/hey-himalayas/${homePageId}?populate[Link_page][populate]=*`
        );
        const pageArray =
          response.data.data.attributes.Link_page.sub_pages.data;
        let page = [];
        page = pageArray.filter((page) => {
          return page.attributes.Route_Name === routeName;
        });
        page = page[0];
        if (page) {
          pageId = page.id;
          setisAvailable(true);
          setpageId(pageId);
        }
      } catch (error) {
        console.log(error.message);
        setPost(false);
      }
      return pageId;
    };

    const calls = async () => {
      const pageId = await getPageId();
      const baseURL = `http://localhost:1337/api/sub-pages/${pageId}?populate=*`;
      axios
        .get(baseURL)
        .then((response) => {
          setPost(response.data.data.attributes.Content);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    calls();
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

  if (!isAvailable) {
    return <h1>404 Page Not Available</h1>;
  }
  if (!post) {
    return (
      <div>
        <h1>Some Network Error, </h1>
        <h3>can not fetch data from server</h3>
      </div>
    );
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
