import  Slider  from 'react-slick';
import React , { useState } from 'react'
import Style from "./../../modules/Product/ProductBanner.module.css"
import img1 from "../../assets/Ban1.jpeg"
import img2 from "../../assets/Ban2.jpeg"
import img3 from "../../assets/Ban3.jpeg"
import img4 from "../../assets/udaipurlake.jpg"


export default function ProductBanner() {
  return (
    <div className={Style.wrapper}>
        <img src ={ img4 }/>
        <div className={Style.content}>
          <div className={Style.inner}>
            <div><h2> Book Burj Khalifa Tickets </h2></div>
            <div className={Style.bookBtn}>Book Now</div>
          </div>
        </div>
    </div>
  )
}
