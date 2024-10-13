import {  Link, useNavigate } from "react-router-dom";

const CTA = () => {

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto my-24">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl my-12 underline">
          Tailwind CSS CTA Sections:
        </h3>
        <button
          className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={() => navigate('/')}
        >
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {/* Moved the check text outside the SVG */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:ms-4">
            {" "}
            Back{" "}
          </span>
        </button>
      </div>
      {/* Secondary CTA */}
      <span className="relative flex justify-center my-12">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        ></div>

        <span className="relative z-10 bg-white px-6">Secondary CTA </span>
      </span>
      <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8  border-2 border-yellow-400 rounded-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              build your websites with{" "}
              <span className="text-indigo-600">high performance</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
              Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
              porta lacinia.
            </p>
            <a
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="javascript:void()"
            >
              Try it out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://i.postimg.cc/kgd4WhyS/container.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>
      <br />
      {/* CTA with image */}
      <span className="relative flex justify-center my-12">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        ></div>

        <span className="relative z-10 bg-white px-6">CTA with image</span>
      </span>
      <section className="py-14 border-2 border-yellow-400 rounded-2xl">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-indigo-600 font-semibold">
                Professional services
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Build your SaaS solution with help from our experts
              </p>
              <p className="mt-3 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum, sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* CTA with Blue background */}
      <span className="relative flex justify-center my-12">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        ></div>

        <span className="relative z-10 bg-white px-6">CTA with Blue background</span>
      </span>
      <section className="py-28 relative bg-blue-600 border-2 border-yellow-400 rounded-2xl">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl md:mx-auto">
            <p className="text-white text-3xl font-semibold sm:text-4xl">Build the future with us</p>
            <p className="text-blue-100 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
          </div>
          <div className="mt-4">
            <Link onClick={() => navigate('/')} className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">Get Started</Link>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full " style={{ background: "linear-gradient(268linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%))"}}></div>
      </section>
    </div>
  );
};

export default CTA;
