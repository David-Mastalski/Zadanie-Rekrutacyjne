import { useEffect, useState } from "react";

export function CountDown() {
  const initialCount = 35000;
  const countdownDurationInSeconds = 20;
  const steps = Math.ceil(initialCount / 10);
  const updateFrequencyInMilliseconds =
    (countdownDurationInSeconds * 1000) / steps;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.max(prevCount - 10, 0));
    }, updateFrequencyInMilliseconds);

    return () => clearInterval(intervalId);
  }, [updateFrequencyInMilliseconds]);

  return <>{count}</>;
}
