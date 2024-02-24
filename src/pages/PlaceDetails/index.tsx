import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PlaceDetails from "./PlaceDetails";

function Places() {
  return (
    <>
      <Navbar positionCss="relative" backgroundColor="#102a71" />
      <PlaceDetails />
      <Footer />
    </>
  );
}

export default Places;
