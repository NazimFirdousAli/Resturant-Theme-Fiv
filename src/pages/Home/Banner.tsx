import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import video from "../../assests/home-video.mp4";

const Banner = () => {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <div className=" main-banner-content">
          <div className="banner-flexi">
            <h1 className="banner-one-heading">
              <Swiper
                autoplay={{
                  delay: 5000,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  Find Nearby <span className="color-0ec6c6">Hotels</span>
                </SwiperSlide>

                <SwiperSlide>
                  Find Nearby <span className="color-0ec6c6">Restaurants</span>
                </SwiperSlide>

                <SwiperSlide>
                  Find Nearby <span className="color-0ec6c6">Beauty</span>
                </SwiperSlide>

                <SwiperSlide>
                  Find Nearby <span className="color-0ec6c6">Fitness</span>
                </SwiperSlide>

                <SwiperSlide>
                  Find Nearby <span className="color-0ec6c6">Shopping</span>
                </SwiperSlide>
              </Swiper>
            </h1>
          </div>

          <p>Expolore top-rated attractions, activities and more...</p>

          <form>
            <div className="row m-0 align-items-center">
              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group">
                  <label>
                    <i className="flaticon-search"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-6 p-0">
                <div className="form-group">
                  <label>
                    <i className="flaticon-pin"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-6 p-0">
                <div className="form-group category-select">
                  <label className="category-icon">
                    <i className="flaticon-category"></i>
                  </label>
                  <select className="banner-form-select">
                    <option>All Categories</option>
                    <option>Restaurants</option>
                    <option>Events</option>
                    <option>Clothing</option>
                    <option>Bank</option>
                    <option>Fitness</option>
                    <option>Bookstore</option>
                    <option>Shopping</option>
                    <option>Hotels</option>
                    <option>Hospitals</option>
                    <option>Culture</option>
                    <option>Beauty</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 p-0">
                <div className="submit-btn">
                  <button type="submit">Search Now</button>
                </div>
              </div>
            </div>
          </form>

          <ul className="popular-search-list">
            <li>Popular:</li>
            <li>
              <a href="/grid-listings-with-map">Restaurants</a>
            </li>
            <li>
              <a href="/grid-listings-with-map">Events</a>
            </li>
            <li>
              <a href="/grid-listings-with-map">Clothing</a>
            </li>
            <li>
              <a href="/grid-listings-with-map">Bank</a>
            </li>
            <li>
              <a href="/grid-listings-with-map">Fitness</a>
            </li>
            <li>
              <a href="/grid-listings-with-map">Bookstore</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
