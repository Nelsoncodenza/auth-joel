import ReactDOM from "react-dom";
import "./index.css";
import { mainRoutes } from "./routes";

const routes = mainRoutes();

ReactDOM.render(routes, document.getElementById("root"));
