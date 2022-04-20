import CartProduct from "../../Components/CartProduct/CartProduct";
import styles from "./cart.module.css";
import {
  useProducts,
  useProductsActions,
} from "../../Providers/StoreProvider/StoreProvider";
import CartSummary from "../../Components/CartSummary/CartSummary";
import { Fragment } from "react";
import FooterSummary from "../../Components/CartSummary/FooterSummary";

const Cart = () => {
  const dispatch = useProductsActions();
  const cart = useProducts();

  const increaseQuantityHandler = (product) => {
    dispatch({ type: "addProduct", value: product });
    dispatch({ type: "totalPrice" });
  };
  const decreaseQuantityHandler = (product) => {
    dispatch({ type: "decreaseQuantity", value: product });
    dispatch({ type: "totalPrice" });
  };
  return (
    <main className={styles.container}>
      {cart.products.length ? (
        <Fragment>
          <aside>
            <CartSummary store={cart} />
          </aside>
          <section className={styles.products_container}>
            {cart.products.map((product) => {
              return (
                <CartProduct
                  onDecrease={() => decreaseQuantityHandler(product)}
                  onIncrease={() => increaseQuantityHandler(product)}
                  product={product}
                  key={product.id}
                />
              );
            })}
          </section>
          <FooterSummary totalPrice={cart.totalPrice} />
        </Fragment>
      ) : (
        <div className={styles.noProduct}>
          <img
            className={styles.noProductImg}
            src={require("../../assets/images/noProduct.png")}
            alt="no product"
          />
          <h4>هیچ محصولی در سبد خرید شما نیست</h4>
        </div>
      )}
    </main>
  );
};

export default Cart;
