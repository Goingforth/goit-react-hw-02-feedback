import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>
        <div className="FeedbackOptions">
          <button type="button" className="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" className="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" className="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h3 className="Section title">Statistics</h3>
        {/* <ul className="<Statistics">
          <li>
            <span>Good:</span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral:</span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad:</span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>Positive feedback:</span>
            <span>{this.countPositiveFeedbackPercentage()}</span>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Feedback;
