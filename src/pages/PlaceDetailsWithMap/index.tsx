import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ListingsWithMap from "./ListingsWithMap";

function ShowListingsWithMap() {
  return (
    <>
      <Navbar positionCss="relative" backgroundColor="#001840" />
      <ListingsWithMap />
      <Footer />
    </>
  );
}

export default ShowListingsWithMap;
