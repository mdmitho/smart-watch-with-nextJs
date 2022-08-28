import Head from 'next/head'
import Baner from '../Components/Baner';
import CompanyOvarview from '../Components/CompanyOvarview';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';




export const getStaticProps = async () => {
  const res = await fetch("https://gentle-hamlet-21532.herokuapp.com/watch");
  const watch = await res.json();

  return {
    props: {
      watch,
    },
  };
};
  


export default function Home({watch}) {
console.log(watch);

  
  return (
    <div className="">
      <Head>
        <title>Smart Watch</title>
        <meta charset="UTF-8"/>
     <meta name="description" content="Free Web tutorials"/>
    <meta name="keywords" content="HTML, CSS, JavaScript"/>
    <meta name="author" content="John Doe"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar />
      <Baner />
      <div className="">
        <div className="container mx-auto">
          <h1 className="text-center text-5xl font-bold my-10 ">All New Watch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {watch.map((curElem) => {
              const { name, price, img, review } = curElem;
              return (
                <div key={curElem.id}>
                  <div className="container mx-auto card  bg-base-100 shadow-xl">
                    <figure>
                      <img className="h-[390px]" src={img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Name: {name}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <h2 className="card-title">price: ${price}</h2>
                      <p>
                        <span className="inline-block"></span>
                      </p>
                      <div className="card-actions justify-center">
                        <button className="btn btn-outline">Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     
      <div className="">
        <CompanyOvarview />
      </div>
      <Contact/>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
