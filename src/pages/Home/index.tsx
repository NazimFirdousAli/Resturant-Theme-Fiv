import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AppDownload from "./AppDownload";
import Banner from "./Banner";
import Blog from "./Blog";
import Category from "./Category";
import Destinations from "./DestinationsTwo";
import Features from "./Features";
import Feedback from "./Feedback";
import HowItWorks from "./HowItWorks";
import ListingArea from "./ListingArea";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <ListingArea />
      <Category />
      <Destinations />
      <Feedback />
      <HowItWorks />
      <Blog />
      <AppDownload />
      <Footer />
    </>
  );
}

export default HomePage;
