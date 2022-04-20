import _ from "lodash";
import styles from "./cartSummary.module.css";
import { useAuth } from "../../Providers/StoreProvider/StoreProvider";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const CartSummary = ({ store }) => {
  const { addToast } = useToasts();
  const auth = useAuth();

  const prices = store.products.map((p) => p.price);
  const totalPrices = _.sum(prices);
  const discounts = store.products.map((p) => p.price - p.offPrice);
  const totalDiscounts = _.sum(discounts);

  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <span>قیمت کالاها:</span>
        <span>{totalPrices} ت</span>
      </div>
      <div className={styles.detailsContainer}>
        <span>تخفیف کالاها:</span>
        <span>{totalDiscounts} ت</span>
      </div>
      <hr style={{ backgroundColor: "#ccc " }} />
      <div className={styles.detailsContainer}>
        <span>جمع کل سبد خرید:</span>
        <span>{store.totalPrice} ت</span>
      </div>
      <Link
        to={auth ? "" : { pathname: "/login", search: "redirect=cart" }}
        className={styles.buyBtn}
        onClick={() => {
          if (auth) {
            addToast("تا همینجا بسه دیگه خداییش", { appearance: "info" });
          }
        }}
      >
        پرداخت
      </Link>
    </div>
  );
};

export default CartSummary;
