import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
];

export default routes;
