import React from 'react';
import Style from './../../modules/Product/VariantContainer.module.css';
import VariantCard from './VariantCard';
import data from './../../Json/Variant.json';

export default function VariantContainer() {
  return (
    <div className={Style.wrapper}>
      <div className={Style.header1}>
        <div className={Style.hr}></div>
        <div>
          Select Your Experience
          {/* <ReactMarkdown>{post.Heading}</ReactMarkdown> */}
        </div>
        <div className={Style.hr}></div>
      </div>

      <div className={Style.cardContainer}>
        <div className={Style.card}>
          <VariantCard data={data} />
        </div>
        <div className={Style.card}>
          <VariantCard data={data} />
        </div>
      </div>
    </div>
  );
}
