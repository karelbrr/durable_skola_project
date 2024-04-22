const AboutUs = () => {
  return (
    <section>
      <div className="lg:h-[470px] bg-fourth bg-no-repeat bg-cover pl-5 pb-20 lg:pl-0 lg:pb-0">
        <h3 className="text-4xl lg:text-5xl font-bold lg:ml-24 pt-28 text-white">About us</h3>
        <p className="lg:w-2/3 lg:ml-24 pt-5 lg:pt-10 text-xl font-light text-white opacity-80">
          Welcome to Modea, a leading social media marketing agency located in
          Prague, 10. Our team of experts is dedicated to helping businesses
          thrive in the digital world through innovative strategies and creative
          solutions.
        </p>

        <p className="lg:w-2/3 lg:ml-24 pt-5 lg:pt-10 text-xl font-light text-white opacity-80">
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
        <button className="w-5/6 bg-second-pink p-3 lg:w-1/6 rounded block m-auto text-xl font-light mt-7 hover:opacity-70">Get Started</button>
      </div>
    </section>
  );
};

export default AboutUs;
