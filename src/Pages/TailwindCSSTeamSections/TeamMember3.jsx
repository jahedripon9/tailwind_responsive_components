import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user26.jpg",
		fullName: "Carl Paxton",
		designation: "Marketing",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user10.jpg",
		fullName: "Lisa Bain",
		designation: "Marketing",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member }) => (
	<>
		<div className="mr-4">
			<img
				src={member.picture}
				alt={member.fullName}
				className="max-w-full h-auto rounded"
				width="120"
			/>
		</div>
		<div className="ezy__team3-content">
			<h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
			<h6 className="font-medium">{member.designation}</h6>
			<p className="opacity-50 mb-0">{member.bio}</p>
			<div className="mt-4">
				{member.socialLinks.map((item, i) => (
					<a
						href={item.href}
						className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
							i + 1 !== member.socialLinks.length && "mr-4"
						}`}
						key={i}
					>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		</div>
	</>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const TeamMember3 = () => {
	return (
		<section className="ezy__team3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-md text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Our Experts Team
						</h2>
						<p>
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6">
					{teamMembers.map((member, i) => (
						<div
							className="col-span-6 md:col-span-3 lg:col-span-2 flex"
							key={i}
						>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default TeamMember3;