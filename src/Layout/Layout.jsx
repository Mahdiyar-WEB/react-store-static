import { Fragment } from "react";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
