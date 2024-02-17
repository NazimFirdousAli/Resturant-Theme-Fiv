import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import EventDetails from "./EventDetails";
import PageBanner from "./PageBanner";

function Events() {
  return (
    <>
      <Navbar positionCss="relative" backgroundColor="#001840" />
      <PageBanner pageTitle="Events" pageName="Events" />
      <EventDetails />
      <Footer />
    </>
  );
}

export default Events;
