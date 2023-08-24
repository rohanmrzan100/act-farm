import React from 'react'
import img3 from "../../assets/img3.jpg";
import img1 from "../../assets/img1.jpg";
import Carousel from "react-material-ui-carousel";
const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            We are authentic Nepali farm-Aama Farm
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xltext-white-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>

          <a
            href="/products"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white-900 border border-black hover:bg-yellow-200 rounded-lg hover:bg-white-100 focus:ring-4 focus:ring-white-100"
          >
            View Our Products
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img src={img3} alt="mockup"/> */}
          <Carousel className="w-full h-full rounded-md" animation="slide" cycleNavigation= {false}>
            {[img1, img3].map((product) => (
              <img
                src={product}
                className="w-full object-cover"
                alt="caurosel img"
              ></img>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroSection