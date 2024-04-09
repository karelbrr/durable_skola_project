import AboutUs from "./components/AboutUs.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Introduction from "./components/Introduction.jsx";
import ReviewSlider from "./components/ReviewSlider.jsx";


const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Cards />
      <ReviewSlider/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;
