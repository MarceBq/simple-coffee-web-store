import PropTypes from "prop-types";

export default function Button(props) {
  const { btnSelected, id, handleClick, text } = props;

  return (
    <div className="w-3/4 flex justify-center text-sm">
      <button
        className={`h-10 p-2.5 rounded-xl border-none text-white transition duration-300 ease-in-out ${
          btnSelected ? "bg-gray-600" : ""
        }`}
        id={id}
        name={text}
        onClick={() => handleClick(id)}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  btnSelected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
