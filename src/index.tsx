import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./core/redux/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
