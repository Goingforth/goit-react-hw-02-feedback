import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptions">
      {Object.keys(options).map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};
