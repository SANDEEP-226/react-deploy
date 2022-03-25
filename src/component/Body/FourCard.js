import React from 'react';
import Style from './../../modules/Body/FourCard.module.css';
import root from './../../modules/HeaderResponsiv.module.css';
export default function FourCard({ value }) {
  const img = 'http://localhost:1337' + value.Image.data.attributes.url;
  return (
    <div className={Style.wrapper}>
      <img src={img} alt="Four" />
      <div className={Style.content}>
        <div className={Style.text}>{value.Content}</div>
      </div>
    </div>
  );
}
