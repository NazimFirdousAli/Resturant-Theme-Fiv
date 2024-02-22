import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./PopularPlacesFilter.css";

import image1 from "../../assests/foods/1.jpg";
import image2 from "../../assests/foods/2.jpg";
import image3 from "../../assests/foods/3.jpg";
import image4 from "../../assests/foods/4.jpg";
import image5 from "../../assests/foods/5.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularPlacesFilter = () => {
  return (
    <div className="page-title-bg">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src={image1} height={550} width={480} />
        </div>
        <div>
          <img src={image2} height={550} width={480} />
        </div>
        <div>
          <img src={image3} height={550} width={480} />
        </div>
        <div>
          <img src={image4} height={550} width={480} />
        </div>
        <div>
          <img src={image5} height={550} width={480} />
        </div>
      </Carousel>
      <div className="container popular-places">
        ; ;<h2>Find Popular Places</h2>
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
                  placeholder="Search..."
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
              <div className="form-group category-select pagebanner-select-custom">
                <label className="category-icon">
                  <i className="flaticon-category"></i>
                </label>
                <select className="banner-form-select-pagebanner">
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
      </div>
    </div>
  );
};

export default PopularPlacesFilter;
