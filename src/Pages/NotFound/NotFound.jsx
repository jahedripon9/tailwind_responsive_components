import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
  return (
      <div className="grid h-screen place-content-center bg-white px-4">
          <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
          <button
              className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-red-500 my-10"
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
                  Back Home page{" "}
              </span>
          </button>
      </div>
  )
}

export default NotFound