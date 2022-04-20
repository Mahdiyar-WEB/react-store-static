import Product from "../../Components/Product/Product";
import * as data from "../../data";
import styles from "./homePage.module.css";
import {
  useProductsActions,
  useProducts,
} from "../../Providers/StoreProvider/StoreProvider";
import { useToasts } from "react-toast-notifications";
import Footer from "../../Components/Footer/Footer";
import loading from "../../assets/images/Loading.svg";
import { createRef, useEffect, useState } from "react";

const HomePage = () => {
  const { addToast } = useToasts();
  const dispatch = useProductsActions();
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const checkInCart = (id = 1, products) => {
    return products.find((p) => p.id === id);
  };

  const addProductHandler = (product) => {
    dispatch({ type: "addProduct", value: product });
    dispatch({ type: "totalPrice" });
    addToast(`${product.name} به سبد خرید اضافه شد`, { appearance: "success" });
  };
  return (
    <main className={styles.container}>
      <div className={loading ? styles.loading : styles.hideLoading}>
        <img src={loading} alt="loading" />
      </div>
      <section className={styles.cards_container}>
        {data.products.map((product) => {
          return (
            <Product
              onAdd={() => addProductHandler(product)}
              product={product}
              key={product.id}
              inCart={checkInCart(product.id, products)}
            />
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
