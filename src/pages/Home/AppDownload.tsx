import mobileImg from "../../assests/app-download.png";
import appstore from "../../assests/apple-store.png";
import playstore from "../../assests/play-store.png";

const AppDownload = () => {
  return (
    <section className="app-download-area bg-main-color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="app-download-content">
              <h2>Download Indice App</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="btn-box">
                <a href="#" className="playstore-btn">
                  <img src={playstore} alt="image" />
                  GET IT ON
                  <span>Google Play</span>
                </a>

                <a href="#" className="applestore-btn">
                  <img src={appstore} alt="image" />
                  Download on the
                  <span>Apple Store</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="app-download-image">
              <img src={mobileImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
