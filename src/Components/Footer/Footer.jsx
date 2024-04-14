// Footer.jsx
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <footer className="bg-white text-black p-4 flex flex-col md:flex-row justify-center items-center text-center">
      {/* Additional sections */}
      <div className="flex flex-col md:flex-row md:text-left md:space-x-8">
        <div className="mr-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Adresse:</h3>
          <br />
          <p>Intet nyt - Godt nyt ApS</p>
          <br />
          <p>Tulipanvej 232</p>
          <p>7320, Valby Øster </p>
        </div>
        <div className="mr-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Links</h3>
          <br />
          <ul>
            <li><a href="#">vikanweb.dk</a></li>
            <li><a href="#">overpådenandenside.dk</a></li>
            <li><a href="#">retsinformation.dk</a></li>
            <li><a href="#">nogenmednews.dk</a></li>
          </ul>
        </div>
        <div className="mr-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Politik</h3>
          <br />
          <p>Privatpolitik</p>
          <p>Cookiepolitik</p>
          <p>Købsinformation</p>
          <p>Delingspolitik</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <br />
          <p>ingen@nyhed.dk</p>
          <p>Telefon: +23232323</p>
          <p>fax: 1233423-222</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

