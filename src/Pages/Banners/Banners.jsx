import {  useNavigate } from "react-router-dom";

export const Banners = () => {

  const navigate = useNavigate()

  return (
    <div className="max-w-screen-xl mx-auto my-24">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl my-12 underline">
          Tailwind CSS Banners Sections:
        </h3>
        <button
          className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-red-500"
          onClick={() => navigate('/')}
        >
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
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
      {/* Banner Centred */}
      <div className="bg-amber-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
          <p className="font-medium text-center ">
            ফুলের সৌন্দর্য ফুলের সুবাসে ♡ আর মানুষের সৌন্দর্য তার চরিত্রে!
            <a
              href="javascript:(0)"
              className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
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
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
      <br />
      {/* Banner Centred with link */}
      <div className="bg-emerald-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-white sm:flex md:px-8">
          <p className="py-2 font-medium">
            দেখতে সুন্দর মানুষগুলো সবসময় ভালো হয় না। কিন্তু ভালো মানুষগুলো সবসময়
            সুন্দর হয়।
          </p>

          <a
            className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm"
            href="/"
          >
            Learn more
          </a>
        </div>
      </div>
      <br />
      {/* Banner with link */}
      <div className="bg-red-600">
        <div className="max-w-screen-xl mx-auto px-4 py-4 items-center justify-between text-white sm:flex md:px-8">
          <div className="flex gap-x-4">
            <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <p className="py-2 font-medium">
              আল্লাহ বলেন, "তোমরা আমার কাছে দোয়া করো। আমি তোমাদের দোয়া কবুল
              করব"।♥
            </p>
          </div>
          <a
            href="/"
            className="inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm-text-sm "
          >
            (সূরা মুমিন, আয়াত ৬০)
          </a>
        </div>
      </div>
      <br />
      {/* Banner with underline link */}
      <div className="bg-yellow-600">
        <div className="max-w-sc mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
          <div className="flex gap-x-4">
            <div className="w-10 h-10 flex-none rounded-lg bg-id-800 flex items-center justify-center">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                />
              </svg>
            </div>
            <p className="py-2 font-medium">
              বুকটা ভারী হয়ে এলে সিজদায় লুটিয়ে পড়ে হালকা করে নিন।{" "}
              <a
                href="/"
                className="font-semibold underline duration-150 hover:text-indigo-100"
              >
                {" "}
                আরিফ আজাদ
              </a>
            </p>
          </div>
          <button className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
      <br />
      {/* Banner center with badge */}
      <div className="bg-blue-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between text-white sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
            <div className="flex-none p-1.5 px-4 rounded-full bg-indigo-800 flex items-center justify-center font-medium text-sm">
              News
            </div>
            <p className="font-medium p-2">
              {" "}
              আল্লাহুম্মা সল্লি ওয়া'সাল্লিম আলা নাবিয়্যিনা মুহাম্মাদ❜❜{" "}
              <a
                className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
                href="/"
              >
                (ﷺ){" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
          <button className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
