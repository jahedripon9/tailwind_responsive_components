import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:mx-auto mx-4">
        <Link to="/banners">
          <div className=" bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all ">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://picsum.photos/id/69/800/600"
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                  Banners Sections
                </h3>
              </header>
            </div>
          </div>
        </Link>
        <Link to="/cta">
          <div className=" bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all ">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://picsum.photos/id/69/800/600"
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                  CTA Sections
                </h3>
              </header>
            </div>
          </div>
        </Link>
        <Link to="/team">
          <div className=" bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all ">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://picsum.photos/id/69/800/600"
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                  Team Sections
                </h3>
              </header>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
