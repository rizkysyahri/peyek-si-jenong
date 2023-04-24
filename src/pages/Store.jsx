import Product from "../components/Layout/Products";
import { productList } from "../data/dummy-data";
import peyek3 from "../assets/peyek 3.png";
import Footer from "../components/fragment/Footer";

const StorePage = () => {
  return (
    <>
    
      <div className="container mt-20">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productList.items.map((item, index) => (
            <Product {...item} key={index} />
            // console.log(item.image)
          ))}
        </div>
      </div>

      <div className="bg-black py-5 flex justify-center items-center">
        <div className="text-white flex marquee">
          <span className="text-4 xl antialiased font-medium hover:font-bold px-10 text-truncate">
            NOW AVAILABLE
          </span>
          <span className="text-4 xl antialiased font-medium hover:font-bold px-10 text-truncate">
            NOW AVAILABLE
          </span>
          <span className="text-4 xl antialiased font-medium hover:font-bold px-10 text-truncate">
            NOW AVAILABLE
          </span>
        </div>
      </div>

      <div className="min-w-screen bg-zinc-100">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
          <div className="items-center p-20">
            <span className="text-base">EXCLUSIVE LOOK AT THE</span>
            <span className="block text-4xl font-bold mt-10">PEYEK IJO</span>
            <div className="py-5">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-mono py-2 px-4 rounded-none">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <img src={peyek3} alt="peyek" className="h-full" />
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default StorePage;
