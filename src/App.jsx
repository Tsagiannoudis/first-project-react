import logo from "./assets/logo.webp";
import profile from "./assets/profilePhoto.jpg";
import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoslider1 from "./assets/photoslider-1.jpg";
import photoslider2 from "./assets/photoslider-2.jpg";

const images = [photoslider1, photoslider2];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="w-full h-full absolute">
        {/*header*/}  
        <div id="header">
          <header className="flex justify-between items-center text-gray-900 py-6 px-8 md:px-16 bg-white drop-shadow-md">
            <a href="#">
              <img
                src={logo}
                alt=""
                className="w-26 h-26 hover:scale-105 transition-all"
              />
            </a>

            {/*menu for big screens*/}
            <ul className="hidden md:flex items-center gap-12 text-base">
              <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                Home
              </li>
              <li className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                About
              </li>
              <li className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                Portfolio
              </li>
              <li className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                Contact
              </li>
            </ul>

            {/*menu for small screens*/}
            <i
              className="bx bx-menu block text-4xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>

            {isMenuOpen && (
              <div className="absolute top-32 left-0 w-full bg-white drop-shadow-md md:hidden">
                <ul className="flex flex-col items-center gap-4 py-4">
                  <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                    Home
                  </li>
                  <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                    About
                  </li>
                  <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                    Portfolio
                  </li>
                  <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6">
                    Contact
                  </li>
                </ul>
              </div>
            )}
          </header>
        </div>

        {/*main section*/}
        <main>
          {/*left side*/}
          <div id="left-side" className="ml-10 mt-20">
            {/*slider*/}
            <div className="w-100 h-100">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt="" className="w-100 h-100" />
                  </div>
                ))}
              </Slider>
            </div>
            {/*left logo*/}
            <div className="-mt-0">
              <img
                src={profile}
                alt=""
                className="w-35 h-35 ml-30 rounded-full outline-offset-0 border-1 bg-white -mt-20"
              />
            </div>
          </div>

          {/*right side*/}
          <div id="right-side"></div>
        </main>
      </div>
    </>
  );
}

export default App;
