import React from 'react';
import Image from 'next/dist/client/image';
import banarrr from '../public/banar.png'
import Head from "next/head";

const Cooo = () => {
    return (
      <div>
        <div>
          <Head>
            <meta charset="UTF-8" />
            <meta name="description" content="Free Web tutorials" />
            <meta name="keywords" content="HTML, CSS, JavaScript" />
            <meta name="author" content="John Doe" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
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
                <Image height="400" width="400" src={banarrr}></Image>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
};

export default Cooo;