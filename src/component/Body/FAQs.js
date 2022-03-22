import React, { useState } from "react";
import Style from "./../../modules/GlobalStyling.module.css";
import inStyle from "./../../modules/Body/FAQs.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import ReactMarkdown from "react-markdown";
import data from "./../../Json/FAQ.json";
import axios from "axios";

export default function FAQs({ id }) {
  const baseURL =
    "http://localhost:1337/api/hey-himalayas/1?populate[Content][populate][SingleQnA][populate]=*";
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
        <div className={
          post.Grey_Background == true ? inStyle.Grey_BackgroundBox : inStyle.White_BackgroundBox
        }>
            <div className={inStyle.wrapper}>
              <div className={inStyle.container}>
                <h2 className={Style.h2}><ReactMarkdown>{post.Heading}</ReactMarkdown></h2>
                {post.SingleQnA.map((value, key) => {
                  return (
                    <div key={key} className={inStyle.content}>
                      <div
                        className={inStyle.header}
                        onClick={() => {
                          setstate(!state);
                          value.status = state;
                        }}
                      >
                        <div className={Style.subHeader}><ReactMarkdown>{value.Question}</ReactMarkdown></div>
                        <div>{value.status ? <FiChevronUp /> : <FiChevronDown />}</div>
                      </div>
                      <div className={value.status ? inStyle.view : inStyle.hide}>
                        <p className={Style.para}><ReactMarkdown>{value.Answer}</ReactMarkdown></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
  );
}
