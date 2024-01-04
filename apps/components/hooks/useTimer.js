const useTimer = (updateTimer) => {
  const newTimer = new Date();
  newTimer.setSeconds(newTimer.getSeconds() + 300);
  updateTimer(newTimer);
};

export default useTimer;
