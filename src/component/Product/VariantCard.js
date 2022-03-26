import Style from './../../modules/Product/VariantContainer.module.css';

export default function VariantCard({ data }) {
  const { variants } = data;
  let custom_highlights = [];

  for (let index = 0; index < 3; index++) {
    custom_highlights.push(data.custom_highlights[index]);
  }

  return (
    <div className={Style.wrapper}>
      <div className={Style.header1}>
        <div className={Style.hr}></div>
        <div className={Style.Heading}>Select your variant</div>
        <div className={Style.hr}></div>
      </div>
      <div className={Style.cardContainer}>
        <div className={Style.card}>
          {variants.map((variant, index) => {
            let discount =
              variant.starting_price / variant.strike_through_price;
            discount = discount * 100;
            discount = Math.round(discount);
            discount = 100 - discount;
            return (
              <div key={index} className={Style.cardWrapper}>
                <div className={Style.ImageContaniner}>
                  <img src={variant.gallery_media[0].media_urls.thumbnail} />
                </div>
                <div className={Style.Content}>
                  <div className={Style.ContentTitle}>{variant.name}</div>
                  <div className={Style.listOfFeatures}>
                    <ul>
                      {custom_highlights.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div className={Style.VisitBtn}>View More+</div>
                </div>
                <div className={Style.PriceTags}>
                  <div className={Style.row1}>
                    <div className={Style.PriceTitle}>Starting from</div>
                    <div className={Style.prvPrice}>
                      INR {variant.strike_through_price}
                    </div>
                  </div>
                  <div className={Style.row2}>
                    <div className={Style.presentPrice}>
                      INR {variant.starting_price}
                    </div>
                    <div className={Style.offerTag}>{discount}% OFF</div>
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
