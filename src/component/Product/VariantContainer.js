import React from 'react';
import Style from './../../modules/Product/VariantContainer.module.css';
import VariantCard from './VariantCard';
// import data from './../../Json/Variant.json';
import img from './../../assets/Ban1.jpeg';

export default function VariantContainer({ data }) {
  console.log(typeof data.data);
  return (
    <div className={Style.wrapper}>
      <div className={Style.header1}>
        <div className={Style.hr}></div>
        <div className={Style.Heading}>Select your variant</div>
        <div className={Style.hr}></div>
      </div>

      <div className={Style.cardContainer}>
        <div className={Style.card}>
          <VariantCard data={data} />
        </div>
      </div>
    </div>
  );
}
