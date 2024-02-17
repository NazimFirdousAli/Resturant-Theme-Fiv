import PopularPlacesFilter from "../../components/Filter/PopularPlacesFilter";
import Footer from "../../components/Footer/Footer";
import WithLeftSidebar from "../../components/LeftSideBar/WithLeftSidebar";
import Navbar from "../../components/Navbar/Navbar";

const GridListingsWithLeftSidebar = () => {
  return (
    <>
      <Navbar positionCss="relative" backgroundColor="#001840" />

      <PopularPlacesFilter />

      <WithLeftSidebar />

      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default GridListingsWithLeftSidebar;
