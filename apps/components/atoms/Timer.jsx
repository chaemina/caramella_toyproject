import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({ className, timer, onExpire }) {
  const time = timer;
  if (!timer) {
    return null;
  }
  function MyTimer({ expiryTimestamp }) {
    const { seconds, minutes } = useTimer({
      expiryTimestamp,
      onExpire: onExpire,
    });

    return (
      <>
        <span>{minutes}</span>:<span>{seconds}</span>
      </>
    );
  }

  return (
    <div className={className}>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
