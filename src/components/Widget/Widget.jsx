import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Wrapper } from '../Widget/WidgetStyled';

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
    return Math.round((good / total) * 100);
  }

  render() {
    return (
      <Wrapper>
        <Section title="Please, leave a feedback">
          <FeedbackOptions
            onGood={this.addGoodRate}
            onNeutral={this.addNeutralRate}
            onBad={this.addBadRate}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default Widget;
