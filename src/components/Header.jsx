const Header = () => {
  return (
    <section className="relative bg-main bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-red-300 opacity-50"></div>
      <header className="relative z-10 flex justify-between">
        <h1 className="mx-12 my-9 text-2xl font-bold font-sans">Modea</h1>
        <button className="mx-16 my-8 p-2 rounded-lg px-4 bg-main-pink text-2xl hover:opacity-70">
          Call us
        </button>
      </header>
      <div className="relative z-10  m-auto w-5/6 mt-52 pl-10 mb-32">
        <h2 className="font-bold text-7xl">
          Elevate Your Online <br /> Presence
        </h2>
        <p className="text-2xl my-10">
          Unlock the full potential of your brand with Prague s leading social
          <br /> media marketing experts.
        </p>
        <button className=" py-3 rounded-lg px-4 bg-main-pink text-2xl hover:opacity-70">
          Learn More
        </button>
      </div>
      <img src="images\tilt 2.png" alt="" className="relative z-10 w-full" />
    </section>
  );
};

export default Header;
