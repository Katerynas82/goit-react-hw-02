import styles from '../Options/Options.module.css'
// eslint-disable-next-line react/prop-types
const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div>
      <button className={styles.btn}   onClick={() => updateFeedback("good")}>Good</button>
      <button className={styles.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={styles.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 &&(
      <button className={styles.btn}  onClick={handleReset} >Reset</button>)}
    </div>
  );
};

export default Options;
