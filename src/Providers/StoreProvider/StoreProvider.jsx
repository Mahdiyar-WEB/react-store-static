import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import storeReducer from "./storeReducer";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();
const AuthContext = createContext();
const AuthContextDispatcher = createContext();
let initialState = {
  products: [],
  totalPrice: 0,
};

const StoreProvider = ({ children }) => {
  const [products, dispatch] = useReducer(storeReducer, initialState);
  const [auth, setAuth] = useState("");
  useEffect(() => {
    initialState = JSON.parse(localStorage.getItem("products"));
    dispatch({type:"update",value:initialState});
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        <AuthContext.Provider value={auth}>
          <AuthContextDispatcher.Provider value={setAuth}>
            {children}
          </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => useContext(ProductContextDispatcher);
export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);

export default StoreProvider;
