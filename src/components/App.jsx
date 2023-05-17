import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const onLeaveFeedback = event => {
    const feedback = event.target.innerText.toLowerCase();

    if (feedback === 'good') {
      setGood(prevState => prevState + 1);
    } else if (feedback === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    ((100 / countTotalFeedback()) * good).toFixed();

  return (
    <div className={css.container}>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          <>
            {countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            )}
          </>
        }
      />
    </div>
  );
};
