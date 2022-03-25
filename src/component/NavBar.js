import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from '../modules/NavBar/NavBar.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';
import DropDown from './NavBar/DropDown';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const pageId = process.env.REACT_APP_STRAPI_HOME_PAGE_ID;
  const baseURL = `http://localhost:1337/api/hey-himalayas/${pageId}?populate[0]=Nav&populate[1]=Nav.Logo&populate[2]=Nav.Link_Item.Sub_Link`;
  const [post, setPost] = useState(null);
  const [sideBarFlag, setSideBarFlag] = useState(false);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.data.attributes.Nav);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) {
    //
    return null;
  }

  const image = 'http://localhost:1337' + post[0].Logo.data.attributes.url;
  const data = post[0].Link_Item;
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <Link to={`/`}>
          <div className={Style.leftContainer}>
            <img src={image} />
          </div>
        </Link>
        <div
          className={`${Style.rightContainer} ${
            sideBarFlag ? Style.show : Style.hide
          }`}
        >
          {post[0].Link_Item.map((value, key) => {
            return (
              <div key={key} className={Style.DropContentContainer}>
                <div
                  className={Style.content}
                  onClick={() => {
                    setDropdown(!dropdown);
                    value.status = !dropdown;
                  }}
                >
                  <a href={value.Header_Link}>
                    <div>{value.Heading}</div>
                  </a>
                  <div className={Style.reactIcon}>
                    {value.Sub_Link.length > 0 ? (
                      value.status ? (
                        <IoIosArrowUp />
                      ) : (
                        <FiChevronDown />
                      )
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className={Style.DropDownContainer}>
                  {value.status && value.Sub_Link.length > 0 && (
                    <DropDown content={value.Sub_Link} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={Style.rightBar}>
          {sideBarFlag ? (
            <AiOutlineClose onClick={() => setSideBarFlag(!sideBarFlag)} />
          ) : (
            <FaBars onClick={() => setSideBarFlag(!sideBarFlag)} />
          )}
        </div>
      </div>
    </div>
  );
}

// onc={() => {
//   setDropdown(!dropdown);
//   value.status = false;
// }}
