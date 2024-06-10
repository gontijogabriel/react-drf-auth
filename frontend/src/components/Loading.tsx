// @ts-ignore
import React from 'react';
import loadingSvg from '../assets/svg_loading.svg';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loadingSvg} alt="Loading" className="w-12 h-12" />
    </div>
  );
};

export default Loading;