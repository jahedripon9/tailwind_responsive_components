import PropTypes from "prop-types";

const TeamMemberItem = ({ member }) => (
  <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full">
    <img
      src={member.picture}
      alt={member.fullName}
      className="h-auto w-full rounded-2xl"
    />
    <div className="px-4 py-6 xl:px-6">
      <h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
      <h6 className="font-medium mb-2">{member.designation}</h6>
      <p className="opacity-50">{member.bio}</p>
      <button className="py-2 px-7 border border-blue-600 hover:bg-blue-600 hover:text-white duration-300 rounded-md mt-6">
        View Details
      </button>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};



export default TeamMemberItem;
