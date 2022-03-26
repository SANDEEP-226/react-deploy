import classes from './../../modules/Body/OneCard.module.css';
// import image from './../../assets/Ban1.jpeg';
export default function OneCard({
  name,
  price,
  currentPrice,
  rating,
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
        <p className={classes.popinsFont4 + ' ' + classes.pckRate}>{rating}</p>
        <div>
          <p className={classes.popinsFont6 + ' ' + classes.pckRate}>
            {currentPrice}
            <del className={classes.pckRate}>{price}</del>
          </p>
        </div>
      </div>
    </div>
  );
}
