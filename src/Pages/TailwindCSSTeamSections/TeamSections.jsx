// TeamMember1.js
import { Link } from "react-router-dom";
import TeamMember2 from "./TeamMember2";
import TeamMember3 from "./TeamMember3";
import TeamMember4 from "./TeamMember4";
import TeamMember5 from "./TeamMember5";
import TeamMemberItem from "./TeamMemberItem"; // Importing TeamMemberItem component
import TeamMember6 from "./TeamMember6";
import TeamMember7 from "./TeamMember7";
import Divider from "../Divider/Divider";
import TeamMember8 from "./TeamMember8";

// Array of team members' data
const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_1.jpeg",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
    bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_2.jpeg",
    fullName: "Raima Ray",
    designation: "Business Head",
    bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_3.jpeg",
    fullName: "Arjun Kapur",
    designation: "UI Design",
    bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
    bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos",
  },
];

const TeamMember1 = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-24">
      <section className="ezy__team1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl my-12 underline">
            Tailwind CSS{" "}
            <span className="text-gray-700-600 border border-red-500 rounded-lg font-semibold p-2">
              Team
            </span>{" "}
            Sections:
          </h3>
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-red-500"
            to="/"
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
          </Link>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex justify-center mb-6 md:mb-12">
            <div className="max-w-lg text-center">
              <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                Our Experts Team
              </h2>
              <p>
                Assumenda non repellendus distinctio nihil dicta sapiente,
                quibusdam maiores, illum at qui.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 text-center">
            {teamMembers.map((member, i) => (
              <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
                <TeamMemberItem member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <TeamMember2 />
      <Divider />
      <TeamMember3 />
      <Divider />
      <TeamMember4 />
      <Divider />
      <TeamMember5 />
      <Divider />
      <TeamMember6 />
      <Divider />
      <TeamMember7 />
      <Divider />
      <TeamMember8 />
    </div>
  );
};

export default TeamMember1;
