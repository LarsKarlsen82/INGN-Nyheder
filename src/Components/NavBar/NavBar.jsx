// //NavBar.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'; // Importer ikonet for burgermenuen

// const NavBar = () => {
//   const [isMenuVisible, setMenuVisible] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMenuToggle = () => {
//     setMenuVisible(!isMenuVisible);
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
//       <header className="fixed top-0 left-0 z-10 w-full">
//         <nav className="flex flex-wrap items-center justify-between py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
//           <div>
//             <Link to="/">
//               <span className="text-red-500 text-4xl font-bold ml-24">INGN</span>
//             </Link>
//           </div>

//           {/* Burgermenu knap */}
//           <button
//             className="md:hidden" // Vises kun på små skærme
//             onClick={handleMenuToggle} // Tilføj klikhåndterer til at åbne og lukke menuen
//           >
//             <FontAwesomeIcon icon={faBars} className="text-gray-500" />
//           </button>

//           {/* Menuen */}
//           <div
//             className={`${
//               isMenuVisible ? "block" : "hidden"
//             } w-full md:flex md:items-center md:w-auto pl-16`}
//             id="menu"
//             style={{ justifyContent: "flex-start" }}
//           >
//                        <ul className="pt-0 text-base text-black flex flex-col md:flex-row">
//               <li className="md:mr-4 flex items-center">
//                 <Link to="/" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Alle
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/indland" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Indland
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/udland" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Udland
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/teknologi" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Teknologi
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/sport" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Sport
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/politik" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Politik
//                 </Link>
//               </li>
//               <li className="md:mr-4">
//                 <Link to="/samfund" className="md:p-4 py-2 block hover:text-purple-400">
//                   {window.innerWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
//                   Samfund
//                 </Link>
//               </li>
//               <li className="ml-auto mr-52">
//               <Link to="/login" className="md:p-4 py-2 block hover:text-purple-400 flex items-center">
//               <FontAwesomeIcon icon={faUser} className="text-red-500 mr-2" />
//             </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Import CSS file

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header className="fixed top-0 left-0 z-10 w-full shadow-md">
        <nav className="flex flex-wrap items-center justify-between py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
          <div>
            <Link to="/">
               <span className={`text-red-500 text-4xl font-bold ml-24 ${windowWidth >= 1900 ? 'ingn-logo-large' : ''}`}>INGN</span>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={handleMenuToggle}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-500" />
          </button>

          <div
            className={`${
              isMenuVisible ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto pl-16`}
            id="menu"
            style={{ justifyContent: "flex-start" }}
          >
            <ul className={`pt-0 text-base text-black flex flex-col md:flex-row ${windowWidth >= 1900 ? 'center-ul' : ''}`}>
              <li className="md:mr-4 flex items-center">
                <Link to="/" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Alle
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/indland" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Indland
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/udland" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Udland
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/teknologi" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Teknologi
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/sport" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Sport
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/politik" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Politik
                </Link>
              </li>
              <li className="md:mr-4">
                <Link to="/samfund" className="md:p-4 py-2 block hover:text-purple-400">
                  {windowWidth <= 768 ? null : <span className="text-gray-500 mr-2">|</span>}
                  Samfund
                </Link>
              </li>
              <li className="ml-auto mr-52">
                <Link to="/login" className="md:p-4 py-2 block hover:text-purple-400 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-red-500 mr-2" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
