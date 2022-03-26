import classes from './../../modules/Body/OneCard.module.css';
import { AiFillStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
// import image from './../../assets/Ban1.jpeg';
export default function OneCard({
  name,
  price,
  currentPrice,
  rating,
  review_count,
  image,
  productId,
}) {
  return (
    <div className={classes.gicOuter}>
      <a href={`/product/${productId}`}>
        <div className={classes.generalImageCard}>
          <img className={classes.imgInCard} src={image} alt="" />
        </div>
      </a>
      <div className={classes.gicBottom}>
        <p className={classes.popinsFont4 + ' ' + classes.pckName}>{name}</p>
        <p className={classes.popinsFont4 + ' ' + classes.pckRate}>
          <AiFillStar className={classes.react_icon_1} />
          {rating}&nbsp;&nbsp;({review_count} Reviews)
        </p>
        <div className={classes.price_tag}>
          <p className={classes.popinsFont6 + ' ' + classes.pckCurrentPrice}>
            <FaRupeeSign className={classes.react_icon_2} />
            {currentPrice}
          </p>
          <p className={classes.pckPrevPrice}>{price}</p>
        </div>
      </div>
    </div>
  );
}
