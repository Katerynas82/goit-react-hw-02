import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [clicksData, setClicksData] = useState(() => {
    const savedData = window.localStorage.getItem("saved-data");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-data", JSON.stringify(clicksData));
  }, [clicksData]);

  const updateFeedback = (feedbackType) => {
    setClicksData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = clicksData.good + clicksData.neutral + clicksData.bad;

  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round((clicksData.good / totalFeedback) * 100);

  const handleReset = () => {
    setClicksData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification message="No feedback given yet" />
      ) : (
        <Feedback
          clicksData={clicksData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
