import {
	faBehance,
	faFacebookF,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member, index }) => (
	<div className="grid grid-cols-12 mt-12">
		<div
			className={`col-span-12 md:col-span-5 ${
				index % 2 === 0 && "md:order-2 md:col-start-8"
			}`}
		>
			<img
				src={member.picture}
				alt={member.fullName}
				className="h-auto mx-auto w-full rounded-lg"
			/>
		</div>

		<div
			className={`col-span-12 md:col-span-6 mt-4 md:mt-0 ${
				index % 2 === 1 && "md:col-start-7"
			}`}
		>
			<div className="h-full flex flex-col justify-center">
				<h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
				<p className="mb-6">{member.designation}</p>

				<p className="opacity-50 mb-0">{member.bio}</p>
				<div className="mt-6">
					{member.socialLinks.map((item, i) => (
						<a
							href={item.href}
							className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
							key={i}
						>
							<FontAwesomeIcon icon={item.icon} />
						</a>
					))}
				</div>
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const TeamMember5 = () => {
	return (
		<section className="ezy__team5 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-md text-center">
						<h2 className="text-3xl font-bold leading-none md:text-[45px] mb-4">
							Our Experts Team
						</h2>
						<p>
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>
				{teamMembers.map((member, i) => (
					<TeamMemberItem member={member} index={i + 1} key={i} />
				))}
			</div>
		</section>
	);
};
export default TeamMember5;