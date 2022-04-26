import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { useProducts } from "../../../Providers/StoreProvider/StoreProvider";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../../Providers/StoreProvider/StoreProvider";

const Navigation = () => {
  const { products } = useProducts() || "";

  const userData = useAuth();
  return (
    <nav className={styles.container}>
      <div className={styles.ul_container}>
        <ul className={styles.link_container}>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active_link : styles.unactive_link
              }
              to="/"
            >
              فروشگاه
            </NavLink>
          </li>
        </ul>
        <ul className={styles.link_container}>
          <li className={styles.cart}>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active_link : styles.unactive_link
              }
              to="/cart"
            >
              <FaShoppingCart />
            </NavLink>
            <span
              className={`${styles.numOfProducts} ${
                products.length === 0 && styles.none_products
              }`}
            >
              {products.length}
            </span>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active_link : styles.unactive_link
              }
              to={userData ? "/profile" : "/login"}
            >
              {userData ? userData.name : "ثبت نام/ورود"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
