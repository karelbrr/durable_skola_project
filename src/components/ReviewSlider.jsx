import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="h-[890px] lg:h-[800px] ">
      <h2 className="font-bold pl-5 pb-20 pt-10 text-3xl lg:text-5xl lg:pt-32 lg:pl-24 lg:pb-0">
        Our customers love us
      </h2>
      <Slider
        {...settings}
        className="w-5/6 m-auto  lg:w-2/3 lg:ml-48 lg:mt-20"
      >
        <div className="">
          <img src="images/guy-1.png" alt="" className="w-28" />
          <p className="slider-card">
            Modeas Social Media Marketing services are outstanding! They helped
            boost my online presence and engagement significantly. The team was
            professional, creative, and delivered exceptional results. Thank
            you, Modea, for your excellent work!
          </p>
          <h3 className="text-2xl opacity-50 font-light pt-4">- John</h3>
        </div>
        <div>
          <img src="images/guy-1.png" alt="" className="w-28" />
          <p className="slider-card">
            Modea is a game-changer in social media marketing! Their teams
            creativity and expertise helped boost my online presence
            significantly. Im grateful for their top-notch service and
            dedication. Highly recommend Modea for all your social media needs.
            Thank you, Modea!
          </p>
          <h3 className="text-2xl opacity-50 font-light pt-4">- Alex</h3>
        </div>
        <div>
          <img src="images/guy-2.png" alt="" className="w-28" />
          <p className="slider-card">
            Modeas Social Media Marketing services in Prague exceeded my
            expectations! Their teams creativity and expertise helped elevate my
            businesss online presence. I am grateful for their outstanding work
            and highly recommend Modea to anyone looking to enhance their social
            media strategy. Thank you, Modea!
          </p>
          <h3 className="text-2xl opacity-50 font-light pt-4">- Peter</h3>
        </div>
      </Slider>
    </section>
  );
};

export default ReviewSlider;
