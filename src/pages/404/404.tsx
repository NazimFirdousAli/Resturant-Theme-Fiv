import PageBanner from "../Events/PageBanner";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import img1 from "../../assests/error.png";

const FourZeroFour = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="404 Error" pageName="404 Error" />

      <section className="error-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="error-content">
            <img src={img1} alt="image" />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <a href="/" className="default-btn">
              Back to Homepage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FourZeroFour;
