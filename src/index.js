import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";
const root = createRoot(document.getElementById("root"));

root.render(
  <ToastProvider
    placement="top-left"
    autoDismiss={true}
    autoDismissTimeout={3000}
  >
    <App />
  </ToastProvider>
);
