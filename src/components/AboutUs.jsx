const AboutUs = () => {
  return (
    <section>
      <div className="h-[470px] bg-fourth bg-no-repeat bg-cover">
        <h3 className="text-5xl font-bold ml-24 pt-28">About us</h3>
        <p className="w-2/3 ml-24 pt-10 text-xl font-light">
          Welcome to Modea, a leading social media marketing agency located in
          Prague, 10. Our team of experts is dedicated to helping businesses
          thrive in the digital world through innovative strategies and creative
          solutions.
        </p>

        <p className="w-2/3 ml-24 pt-10 text-xl font-light ">
          With a focus on driving engagement and increasing brand awareness, we
          tailor our services to meet the unique needs of each client. Trust
          Modea to elevate your social media presence and take your business to
          the next level.
        </p>
      </div>
      <div className="h-[270px]">
        <p className="text-center pt-20 text-xl font-light">
          Enhance your social media marketing strategy with Modea in Prague.
        </p>
        <button className="bg-second-pink p-3 rounded block m-auto text-xl font-light mt-7">Get Started</button>
      </div>
    </section>
  );
};

export default AboutUs;
