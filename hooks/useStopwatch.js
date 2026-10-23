import { useEffect, useState } from "react";

function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return seconds;
}

export default useStopwatch;
