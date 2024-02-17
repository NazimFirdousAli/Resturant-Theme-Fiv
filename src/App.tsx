import "swiper/css";
import "swiper/css/bundle";
import "./styles/animate.min.css";
import "./styles/bootstrap.min.css";
import "./styles/boxicons.min.css";
import "./styles/flaticon.css";

// Global Style
import { BrowserRouter } from "react-router-dom";
import Router from "./router/routes";
import "./styles/responsive.css";
import "./styles/rtl.css";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
