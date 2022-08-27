import React from 'react';
import Image from 'next/dist/client/image';
import banar from '../public//banar.png'
const Baner = () => {
    return (
      <div>
        <div className="hero container mx-auto min-h-screen bg-base-100 text-left">
          <div className="hero-content flex-col lg:flex-row">
            <div className="ml-10">
              <h1 className="text-6xl font-bold ">A Great Addition</h1>
              <p className="py-6 text-xl">
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="">
              <Image
               className=''
                src={banar}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Baner;