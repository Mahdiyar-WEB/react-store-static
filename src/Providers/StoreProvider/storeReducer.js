import _ from "lodash";

const storeReducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      const cloneProducts = [...state.products];
      const index = cloneProducts.findIndex(
        (product) => product.id === action.value.id
      );
      if (index < 0) {
        cloneProducts.push({
          ...action.value,
          quantity: 1,
        });
      } else {
        const defindedProduct = cloneProducts[index];
        defindedProduct.price += action.value.price / action.value.quantity;

        defindedProduct.offPrice +=
          action.value.offPrice / action.value.quantity;

        defindedProduct.quantity += 1;
      }
      localStorage.setItem(
        "products",
        JSON.stringify({ ...state, products: cloneProducts })
      );
      return { ...state, products: cloneProducts };
    }
    case "decreaseQuantity": {
      const cloneProducts = [...state.products];
      const defindedProduct = cloneProducts.find(
        (product) => product.id === action.value.id
      );
      if (defindedProduct.quantity === 1) {
        const updatedProducts = cloneProducts.filter(
          (product) => product.id !== action.value.id
        );
        localStorage.setItem(
          "products",
          JSON.stringify({ ...state, products: updatedProducts })
        );
        return { ...state, products: updatedProducts };
      } else {
        defindedProduct.price -= action.value.price / action.value.quantity;
        defindedProduct.offPrice -=
          action.value.offPrice / action.value.quantity;
        defindedProduct.quantity -= 1;
        localStorage.setItem(
          "products",
          JSON.stringify({ ...state, products: cloneProducts })
        );
        return { ...state, products: cloneProducts };
      }
    }
    case "totalPrice": {
      const products = [...state.products];
      const allPrices = products.map((p) => p.offPrice);
      const total = _.sum(allPrices);
      localStorage.setItem(
        "products",
        JSON.stringify({ ...state, totalPrice: total })
      );
      return { ...state, totalPrice: total };
    }
    case "update": {
      const value = action.value || "";
      return { products: value.products, totalPrice: value.totalPrice };
    }
 
    default:
      return state;
  }
};

export default storeReducer;
