import React from 'react';
import Style from './../../modules/Body/ProductBanner.module.css';
import img from './../../assets/banner_1.png';
export default function ProductBanner() {
  return (
    <div className={Style.wrapper}>
      <img src={img} />
      <div className={Style.Container}>
        <div className={Style.Banner_Title}>Dubai Tickets By Thrillophilia</div>
        <div className={Style.Banner_Content}>We Rome Together</div>
        <div className={Style.ck_btn}>Check Now</div>
      </div>
    </div>
  );
}
