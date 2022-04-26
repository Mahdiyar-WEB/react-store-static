import styles from "./product.module.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product, onAdd, inCart }) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("cart");
  };
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} />
      <div className={styles.head}>
        <p>{product.name}</p>
        <p className={product.discount > 0 ? styles.discount_price : ""}>
          ت {product.price}
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.discount_container}>
          {product.discount > 0 && (
            <small className={styles.discount}>{product.discount}%</small>
          )}
          {product.discount > 0 && <p>ت {product.offPrice}</p>}
        </div>
        {inCart ? (
          <button
            className={`${styles.buyBtn}  ${
              product.discount === 0 ? styles.end_btn : ""
            }`}
            onClick={() => redirect()}
          >
            ادامه سفارش
          </button>
        ) : (
          <button
            className={`${styles.buyBtn}  ${
              product.discount === 0 ? styles.end_btn : ""
            }`}
            onClick={onAdd}
          >
            اضافه کردن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
