import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Style from './../../modules/Product/VariantContainer.module.css';
import img from './../../assets/Ban1.jpeg';
function Render(data) {
  return (
    <div className={Style.Render}>
      <ul>
        {data.content.map((value, key) => {
          return <li key={key}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default function VariantCard({ data }) {
  const [state, setstate] = useState(0);
  return (
    <div className={Style.cardWrapper}>
      <div className={Style.ImageContaniner}>
        <img src={img} />
      </div>
      <div className={Style.Content}>
        <div className={Style.ContentTitle}>
          Combo (Save 25%): Burj Khalifa + Dubai Miracle Garden Tickets
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
        <div className={Style.row3}>
          <div className={Style.Visit}>View More+</div>
          <div className={Style.checkAvl}>Check Availability</div>
        </div>
      </div>
    </div>
  );
}
