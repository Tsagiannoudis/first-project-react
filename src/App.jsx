import logo from "./assets/logo.webp";
import profile from "./assets/profilePhoto.jpg";
import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoslider1 from "./assets/photoslider-1.jpg";
import photoslider2 from "./assets/photoslider-2.jpg";
import MenuRenderContect from "./components/MenuRenderContect";

const images = [photoslider1, photoslider2];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeContect, setActiveContect] = useState("About me");

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <>
      <div className="w-full h-full absolute bg-zinc-600">
        {/*main section*/}
        <main className="flex  mt-50 max-w-[1140px] mx-auto">
          {/*header*/}
          <div id="header">
            <header className="">
              {/*menu for big screens*/}
              <ul className="min-w-30 gap-12 text-base bg-slate-800 text-white py-3 rounded-l-lg">
                <li
                  className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                  onClick={() => setActiveContect("About me")}
                >
                  About Me
                </li>
                <li
                  className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                  onClick={() => setActiveContect("Portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className="p-1 hover:bg-amber-600 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                  onClick={() => setActiveContect("Contact")}
                >
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
                    <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                    onClick={() => setActiveContect("About me")}>
                      About Me
                    </li>
                    <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                    onClick={() => setActiveContect("Portfolio")}>
                      Portfolio
                    </li>
                    <li className="p-1 hover:bg-blue-900 text hover:text-white rounded-md transition-all cursor-pointer px-6"
                    onClick={() => setActiveContect("Contact")}>
                      Contact
                    </li>
                  </ul>
                </div>
              )}
            </header>
          </div>

          {/*left side box*/}
          <div
            id="left-side"
            className="bg-slate-800 text-white -mt-5 -mb-10 rounded-b-lg rounded-t-lg"
          >
            {/*slider with images*/}
            <div className="w-100 h-100">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt=""
                      className="w-100 h-100 rounded-t-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/*logo*/}
            <div className="relative group">
              <img
                src={logo}
                alt=""
                className="w-35 h-35 ml-30 rounded-full outline-offset-0 border-1 bg-white -mt-20 group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={profile}
                alt=""
                className="w-35 h-35 ml-30 rounded-full outline-offset-0 border-1 bg-white absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {/*bottom div*/}
            <div className="text-wrap whitespace-normal text-center mb-30 mt-3">
              <h1>Ioakeim Tsagiannoudis</h1>
              <span>FrontEnd Developer</span>
            </div>
          </div>

          {/*right side box*/}
          <div
            id="right-side flex"
            className="bg-slate-800 text-white color p-8 max-h-[600px] overflow-y-auto"
            style={{ height: "600px" }}
          >
            <MenuRenderContect activeContect={activeContect} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
