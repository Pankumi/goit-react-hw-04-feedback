import React from "react";
import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    // console.log('Statistics', this.props);
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Total: {positivePercentage}%</p>
      </>
    );

}

// export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// ************ старий код
// export class Statistics extends Component {
//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props;
//     // console.log('Statistics', this.props);
//     return (
//       <>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>Total: {total}</p>
//         <p>Total: {positivePercentage}%</p>
//       </>
//     );
//   }
// }