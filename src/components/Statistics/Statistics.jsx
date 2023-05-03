const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className="<Statistics">
      <li>
        <span>Good:</span>
        {/* <span>{this.state.good}</span> */}
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        {/* <span>{this.state.neutral}</span> */}
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        {/* <span>{this.state.bad}</span> */}
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        {/* <span>{this.countTotalFeedback()}</span> */}
        <span>{total}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        {/* <span>{this.countPositiveFeedbackPercentage()}</span> */}
        <span>{positive}</span>
      </li>
    </ul>
  );
};

export default Statistics;
