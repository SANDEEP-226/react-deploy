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
        <div>Select Your Experience</div>
        <div className={Style.hr}></div>
      </div>

      <div className={Style.cardContainer}>
        <div className={Style.card}>
          {data.map((item, i) => {
            return (
              <div key={i} className={Style.cardWrapper}>
                <div className={Style.ImageContaniner}>
                  <img src={img} alt={'ksdj'} />
                </div>
                <div className={Style.Content}>
                  <div className={Style.ContentTitle}>
                    Combo (Save 25%): Burj Khalifa + Dubai Miracle Garden
                    Tickets
                  </div>
                  <div className={Style.listOfFeatures}>
                    <ul>
                      <li>Instant Confirmation</li>
                      <li>24 hours free cancellation</li>
                      <li>Get 5% Cashback</li>
                    </ul>
                  </div>
                  <div className={Style.VisitBtn}>View More+</div>
                </div>
                <div className={Style.PriceTags}>
                  <div className={Style.row1}>
                    <div className={Style.PriceTitle}>Starting from</div>
                    <div className={Style.prvPrice}>INR 3,999</div>
                  </div>
                  <div className={Style.row2}>
                    <div className={Style.presentPrice}>INR 2,499</div>
                    <div className={Style.offerTag}>30% OFF</div>
                  </div>
                  <div className={Style.row3}>Check Availability</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
