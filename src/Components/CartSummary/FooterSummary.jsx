import styles from "./footerSummary.module.css";
import { useAuth } from "../../Providers/StoreProvider/StoreProvider";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const FooterSummary = ({ totalPrice }) => {
  const auth = useAuth();
  const { addToast } = useToasts();
  return (
    <footer className={styles.container}>
      <div className={styles.price}>
        <small className={styles.subPrice}>جمع سبد خرید</small>
        <p style={{ direction: "rtl" }}>
          {totalPrice}
          <span style={{ marginRight: "5px", fontSize: "14px" }}>تومان</span>
        </p>
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
    </footer>
  );
};

export default FooterSummary;
