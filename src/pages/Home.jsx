import * as React from "react";
import peyekSiJenong from "../assets/peyek si jenong.png";
import Footer from "../components/fragment/Footer";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
    <Header />
    <section>
      <div className="container mt-20">
        <div className="flex flex-wrap">
          <div className="w-full self-center leading-tight text-center px-4 lg:w-1/2 mt-10">
            <span className="font-bold text-[75px]">Say Hi</span>
            <h2 className="text-[44px] font-bold text-zinc-400">
              To This Product
            </h2>
            <h1 className="font-medium text-amber-500 text-[44px] mt-10">
              PEYEK SI JENONG
            </h1>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 lg:right-0">
            <div className="relative mt-10">
              <img src={peyekSiJenong} alt="peyek" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 bg-black min-h-full w-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-center mx-auto max-w-md">
            <p className="text-base text-white font-medium antialiased mt-5">
              Peyek si jenong telah berdiri sejak tahun 2020 semenjak pandemi
              covid-19, usaha ini adalah usaha yg di miliki oleh seorang ibu yg
              baik, ramah, dan juga cantik yaitu Ibu Dwi Untari
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
};

export default HomePage;
