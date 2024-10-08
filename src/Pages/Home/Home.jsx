import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24 ">
      {/* Banners Border - Left */}
      <Link
        to="/banners"
        className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500 mr-5"
      >
        <span className="text-sm font-medium transition-all group-hover:me-4">
        Tailwind CSS Banners
        </span>

        {/* <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span> */}
      </Link>
      <Link
        to="/cta"
        className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500 mr-5"
      >
        <span className="text-sm font-medium transition-all group-hover:me-4">
        Tailwind CSS CTA Sections
        </span>

        {/* <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span> */}
      </Link>
      <Link
        to="/team"
        className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
      >
        <span className="text-sm font-medium transition-all group-hover:me-4">
        Tailwind CSS Team Sections
        </span>

        {/* <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span> */}
      </Link>
    </div>
  );
};
