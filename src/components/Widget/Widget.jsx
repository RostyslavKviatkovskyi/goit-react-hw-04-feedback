import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';

class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodRate = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralRate = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBadRate = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100) + '%';
  }

  render() {
    return (
      <div>
        <h2>Please, leave a feedback</h2>
        <button type="button" onClick={this.addGoodRate}>
          Good
        </button>
        <button type="button" onClick={this.addNeutralRate}>
          Neutral
        </button>
        <button type="button" onClick={this.addBadRate}>
          Bad
        </button>
        {/* <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Widget;
