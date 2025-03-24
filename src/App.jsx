import logo from "./assets/logo.webp";
import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="w-full h-full absolute">
        <div id="header">
          <header className="flex justify-between items-center text-gray-900 py-6 px-8 md:px-16 bg-white drop-shadow-md">
            <a href="#">
              <img
                src={logo}
                alt=""
                className="w-26 h-26 hover:scale-105 transition-all"
              />
            </a>

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

            <i
              className="bx bx-menu block text-4xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>


          </header>
        </div>
        <div></div>
        <div>Welcome</div>
      </div>
    </>
  );
}

export default App;
