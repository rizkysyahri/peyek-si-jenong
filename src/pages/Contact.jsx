import React from "react";
import HeaderForContact from "../components/fragment/HeaderForContact";
import Footer from "../components/fragment/Footer";

const ContactPage = () => {
  return (
    <>
      <HeaderForContact />
      <div className="container p-20">
        <div className="flex flex-wrap ">
          <div className="w-full selt-center leading-tight px-4 lg:w-1/2 ">
            <h1 className="text-5xl align-middle">Contact us.</h1>
            <p className=" mt-10 font-normal">PEYEKSIJENONG@GMAIL.COM</p>
          </div>

          <div className="w-full self-end lg:w-1/2">
            <div className=" mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-none border-0 py-1.5 p-3 bg-zinc-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black focus:drop-shadow-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-none border-0 py-1.5 p-3 bg-zinc-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black focus:drop-shadow-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-none border-0 py-1.5 p-3 bg-zinc-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black focus:drop-shadow-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div>
                  <textarea
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-none border-0 py-1.5 p-3 bg-zinc-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black focus:drop-shadow-md sm:text-sm sm:leading-6 h-32"
                  />
                </div>
              </div>
              <button type="submit" className="mx-auto bg-zinc-400 text-white font-normal hover:bg-zinc-300 py-2 px-5 text-center">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
