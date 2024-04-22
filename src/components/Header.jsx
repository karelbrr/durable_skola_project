import { CiMenuBurger } from "react-icons/ci";
import usePopup from "./usePopup";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

const Header = () => {
  const { isPopupOpen, togglePopup } = usePopup();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020 && isPopupOpen) {
        togglePopup();
        console.log("test");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPopupOpen, togglePopup]);

  return (
    <section className="relative bg-main bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-red-300 opacity-50"></div>
      <header className="relative z-10 flex justify-between">
        {isPopupOpen && (
          <div className="absolute bg-ham-pink w-full h-[180px] ">
            <IoMdClose
              className="text-2xl  mr-5 float-right mt-10 hover:cursor-pointer"
              onClick={togglePopup}
            />
            <div>
              <button className="call-us-btn mt-28 ml-12">Call us</button>
            </div>
          </div>
        )}
        <h1 className="mx-12 my-9 text-2xl font-bold font-sans z-10">Modea</h1>
        <button>
          <CiMenuBurger
            className="text-2xl  mr-5 flex lg:hidden"
            onClick={togglePopup}
          />
        </button>
        <button className="call-us-btn hidden my-8 mx-16 lg:block">
          Call us
        </button>
      </header>
      <div className="relative z-10  m-auto w-5/6 mt-[500px]  md:mt-52 lg:pl-10 mb-32">
        <h2 className="font-bold text-4xl md:text-7xl md:w-[800px] ">
          Elevate Your Online Presence
        </h2>
        <p className="text-2xl my-10">
          Unlock the full potential of your brand with Prague s leading social
          media marketing experts.
        </p>
        <button className="py-3  rounded-lg px-4 bg-main-pink text-2xl hover:opacity-70 transistion w-full md:w-[150px]">
          Learn More
        </button>
      </div>
      <img src="images\tilt 2.png" alt="" className="relative z-10 w-full" />
    </section>
  );
};

export default Header;
