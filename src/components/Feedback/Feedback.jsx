/* eslint-disable react/prop-types */

import styles from "./Feedback.module.css";
import Notification from "../Notification/Notification";



export default function Feedback({ clicksData, totalFeedback, positiveFeedback }) {
  


  return (
    <div>
      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <ul className={styles.list}>
          <li>Good: {clicksData.good} </li>
          <li>Neutral: {clicksData.neutral} </li>
          <li>Bad: {clicksData.bad} </li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback} % </li>
        </ul>
      )}
    </div>
  );
}
