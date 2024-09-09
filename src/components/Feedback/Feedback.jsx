/* eslint-disable react/prop-types */

import styles from "./Feedback.module.css"; 

export default function Feedback({ clicksData, totalFeedback, positiveFeedback }) {
    return (
    <div>
      
        <ul className={styles.list}>
          <li>Good: {clicksData.good} </li>
          <li>Neutral: {clicksData.neutral} </li>
          <li>Bad: {clicksData.bad} </li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback} % </li>
        </ul>
      
    </div>
  );
}
