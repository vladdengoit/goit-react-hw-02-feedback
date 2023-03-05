import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../Feedback/Feedback';
import { TotalDiv } from './Counter.styled';
// import { Note } from '../Note/Note';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countByButtons = event => {
    const name = event.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.bad + this.state.good + this.state.neutral)) *
        100
    );
  };

  render() {
    const TotalCount = this.countTotalFeedback();
    console.log(TotalCount);
    const Positiveprocent = this.countPositiveFeedbackPercentage();
    console.log(Positiveprocent);
    return (
      <TotalDiv>
        <FeedbackOptions buttons={this.countByButtons} />
        {/* <Title>Please leave feedback!!!</Title>
        <DivforButton>
          <ButtonMy name="good" onClick={this.countByButtons}>
            Good
          </ButtonMy>
          <ButtonMy name="neutral" onClick={this.countByButtons}>
            Neutral
          </ButtonMy>
          <ButtonMy name="bad" onClick={this.countByButtons}>
            Bad
          </ButtonMy>
        </DivforButton> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={TotalCount}
          positivePercentage={Positiveprocent}
        ></Statistics>
        {/* <Note /> */}
        {/* <Title>Statistic</Title>
        <Mylist>
          <li>Good : {this.state.good}</li>
          <li>Neutral : {this.state.neutral}</li>
          <li>Bad : {this.state.bad}</li>
          <li>Total: {TotalCount}</li>
          <li>Positive feedback:{Positiveprocent}%</li>
        </Mylist> */}
      </TotalDiv>
    );
  }
}
