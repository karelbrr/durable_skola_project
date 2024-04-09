const Cards = () => {
  return (
    <section className="">
      <div className="bg-second bg-no-repeat bg-cover h-[1200px]">
        <img className="w-full" src="images/tilt 3.png" alt="" />
      </div>
      <div className="h-[800px] px-24 pt-24">
        <h2 className="text-5xl font-bold">My services</h2>
        <div className="grid grid-cols-2">
          <div className="py-10">
            <h3 className="card-heading">Content Creation Packages</h3>
            <p className="card-text">
              Tailored content for maximum engagement and reach on social media
              platforms.
            </p>
          </div>
          <div className="py-10">
            <h3 className="card-heading">Social Media Analysis</h3>
            <p className="card-text">
              In-depth analysis of social media performance to optimize strategy
              and results.
            </p>
          </div>
          <div className="py-10">
            <h3 className="card-heading">Influencer Marketing Campaigns</h3>
            <p className="card-text">
              Collaborate with key influencers to boost brand awareness and
              credibility.
            </p>
          </div>
          <div className="py-10">
            <h3 className="card-heading">Social Media Advertising</h3>
            <p className="card-text">
              Targeted ad campaigns to increase visibility and drive
              conversions.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-third bg-no-repeat bg-cover"></div>
    </section>
  );
};

export default Cards;
