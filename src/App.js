import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import StoreProvider from "./Providers/StoreProvider/StoreProvider";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Layout>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </Layout>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
