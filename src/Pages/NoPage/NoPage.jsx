import React from 'react';
import errorGif from '../../assets/images/Error_404.gif';

const NoPage = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-2xl">
      <div className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Page Not Found
          </h1>
          <img
            src={errorGif}
            alt="404 Not Found"
            className="w-600 h-600"
          />
        </div>
      </div>
    </div>
  );
};

export default NoPage;
