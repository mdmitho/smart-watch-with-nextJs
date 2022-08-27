import Head from 'next/head'
import Baner from '../Components/Baner';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';








 
export default function Home() {


  
  return (
    <div className="">
      <Head>
        <title>Smart Watch</title>
      </Head>
      <Navbar />
      <Baner/>
      <Footer/>

    </div>
  );
}
