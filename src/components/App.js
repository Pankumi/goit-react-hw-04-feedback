// // npm i styled-components

import React, { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics.js";
import { Notification } from "./Notification/Notification";
import { Box, Buttons } from "./App.styled";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {

  const [reviews, setReviews] = useState({...INITIAL_STATE});

  
  // метод для зміни стану при натисканні кнопки - з події достаєтьс натиснута кнопка - відповідний стан + 1
  const countResponse = evt => {
    const buttonClick = evt.target.dataset.name;
    // console.log('evt >>', evt.target.dataset.name);
    setReviews( prevState => ({...prevState, [buttonClick]: prevState[buttonClick] + 1 }) )
  };

  const {good, neutral, bad} = reviews;

  const countTotalFeedback = 0 + good + neutral + bad;

  const countPositiveFeedbackPercentage = good ? Math.round((100 / (good + neutral + bad)) * good) : 0;

    return (
      <Box>
        <Section title="Please leave feedback">
          <Buttons>
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={countResponse}
            ></FeedbackOptions>
          </Buttons>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={reviews.good}
              neutral={reviews.neutral}
              bad={reviews.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );

}

// Старий код:
// export class App extends Component {
//   // стани при завантаженні
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // метод для зміни стану при натисканні кнопки - з події достаєтьс натиснута кнопка - відповідний стан + 1
//   countResponse = e => {
//     const buttonClick = e.target.dataset.name;
//     // console.log(this.state[buttonClick]);
//     this.setState({
//       [buttonClick]: this.state[buttonClick] + 1,
//     });
//   };

//   countTotalFeedback = ({ good, neutral, bad }) => {
//     // console.log(e);
//     return 0 + good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
//     return good ? Math.round((100 / (good + neutral + bad)) * good) : 0;
//   };

//   render() {
//     const myCountTotalFeedback = this.countTotalFeedback(this.state);
//     const myCountPositiveFeedbackPercentage =
//       this.countPositiveFeedbackPercentage(this.state);
//       // console.log(myCountTotalFeedback);
//     return (
//       <Box>
//         <Section title="Please leave feedback">
//           <Buttons>
//             <FeedbackOptions
//               options={["good", "neutral", "bad"]}
//               onLeaveFeedback={this.countResponse}
//             ></FeedbackOptions>
//           </Buttons>
//         </Section>

//         <Section title="Statistics">
//           {myCountTotalFeedback ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={myCountTotalFeedback}
//               positivePercentage={myCountPositiveFeedbackPercentage}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
