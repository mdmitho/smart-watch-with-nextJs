import React from 'react';
import Image from 'next/dist/client/image';
import NotFound from '../public/logo notfound/404.jpg'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const ErrorPage = () => {
    const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, [router]);
    return (
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="John Doe" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Image src={NotFound} layout="fill"></Image>
      </div>
    );
};

export default ErrorPage;