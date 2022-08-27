import React from 'react';
import Image from 'next/dist/client/image';
import NotFound from '../public/logo notfound/404.jpg'
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
    const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, [router]);
    return (
      <div>
        <Image src={NotFound} layout="fill"></Image>
      </div>
    );
};

export default ErrorPage;