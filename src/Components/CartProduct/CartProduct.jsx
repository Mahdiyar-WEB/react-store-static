import styles from "./cartProduct.module.css";
import { BiTrash } from "react-icons/bi";

const CartProduct = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.details_header}>
          <p className={styles.discount}>{product.discount}%</p>
          <h4>{product.name}</h4>
        </div>
        <div className={styles.middle_details}>
          <div className={styles.futures_container}>
            <p>:ویژگی ها</p>
            <ul className={styles.futures_support_container}>
              {product.description.map((feature, index) => {
                return (
                  <li className={styles.support_item} key={index}>
                    {feature.support}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.price_container}>
            <div className={styles.quantity_container}>
              <button onClick={onIncrease}>&#43;</button>
              <p className={styles.quantity_num}>{product.quantity}</p>
              <button onClick={onDecrease}>
                {product.quantity === 1 ? <BiTrash /> : <span>&#8722;</span>}
              </button>
            </div>
            <div>
              {product.discount > 0 && (
                <p className={styles.price}>{product.price}هزار تومان</p>
              )}
              <p
                className={`${styles.offPrice} ${
                  product.discount === 0 && styles.justOffPrice
                }`}
              >
                {product.offPrice}هزار تومان
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer_details}></div>
      </div>
      <div className={styles.image_container}>
        <img src={product.image} alt={product.image} />
      </div>
    </div>
  );
};

export default CartProduct;
