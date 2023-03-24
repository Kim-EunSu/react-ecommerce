import Announce from "../components/Announce";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <Announce />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
}

export default Home;
