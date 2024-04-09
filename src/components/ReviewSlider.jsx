import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="h-[800px] ">
      <h2 className="font-bold text-5xl pt-32 pl-24">Our customers love us</h2>
      <Slider {...settings} className="w-1/2">
        <div>
          <p>
            Modeas Social Media Marketing services are outstanding! They helped
            boost my online presence and engagement significantly. The team was
            professional, creative, and delivered exceptional results. Thank
            you, Modea, for your excellent work!
          </p>
          <h3>- Alex</h3>
        </div>
        <div>
          <p>
            Modea is a game-changer in social media marketing! Their teams
            creativity and expertise helped boost my online presence
            significantly. Im grateful for their top-notch service and
            dedication. Highly recommend Modea for all your social media needs.
            Thank you, Modea!
          </p>
          <h3>- Alex</h3>
        </div>
        <div>
          <p>
            Modeas Social Media Marketing services in Prague exceeded my
            expectations! Their teams creativity and expertise helped elevate my
            businesss online presence. I am grateful for their outstanding work
            and highly recommend Modea to anyone looking to enhance their social
            media strategy. Thank you, Modea!
          </p>
          <h3>- Alex</h3>
        </div>
      </Slider>
    </section>
  );
};

export default ReviewSlider;
