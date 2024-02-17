import Countdown from "react-countdown";
import img1 from "../../assests/payment/img1.png";
import img2 from "../../assests/payment/img2.png";
import img3 from "../../assests/payment/img3.png";
import img4 from "../../assests/payment/img4.png";
import EventsCountdown from "./EventsCountdown";

const EventDetails = () => {
  return (
    <div className="events-details-area bg-f9f9f9 ptb-100">
      <div className="container">
        <div className="events-details-image">
          <Countdown
            date={Date.now() + 80000000000}
            renderer={EventsCountdown}
          />
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="events-details-header">
              <ul>
                <li>
                  <i className="bx bx-calendar"></i>Dec 1, 2020 - Dec 31, 2020
                </li>
                <li>
                  <i className="bx bx-map"></i>Rome, Italy
                </li>
                <li>
                  <i className="bx bx-time"></i>12:00 AM - 12:00 PM
                </li>
              </ul>
            </div>

            <div className="events-details-location">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.2570988032!2d12.395915345059903!3d41.91024148618828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sbd!4v1597645466641!5m2!1sen!2sbd"></iframe>
              </div>
            </div>

            <div className="events-details-desc">
              <h3>About The Event</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h3>Where the event?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h3>Who this event is for?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="events-details-info">
              <ul className="info">
                <li className="price">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Cost</span>
                    $149
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Total Slot</span>
                    1500
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Booked Slot</span>
                    350
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Pay With</span>
                    <div className="payment-method">
                      <img src={img1} className="shadow" alt="image" />
                      <img src={img2} className="shadow" alt="image" />
                      <img src={img3} className="shadow" alt="image" />
                      <img src={img4} className="shadow" alt="image" />
                    </div>
                  </div>
                </li>
              </ul>

              <div className="btn-box">
                <a href="#" className="default-btn">
                  <i className="flaticon-user"></i>Book Now<span></span>
                </a>
                <p>
                  You must{" "}
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#loginRegisterModal"
                  >
                    login
                  </a>{" "}
                  before register event.
                </p>
              </div>

              <div className="events-share">
                <div className="share-info">
                  <span>
                    Share This Course <i className="flaticon-share"></i>
                  </span>

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
