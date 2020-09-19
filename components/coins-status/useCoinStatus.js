import { useState, useEffect, useRef } from 'react';

export const useCoinStatus = (lowerLimit, upperLimit) => {
  //TODO : use useInterval instead of setInterval
  const [start, setStart] = useState(lowerLimit);
  const [end, setEnd] = useState(upperLimit);
  let setCoinInterval = useRef(null);

  useEffect(() => {
    setCoinInterval.current = setInterval(function coinInterval() {
      if (start > end) {
        setStart((prevCoin) => prevCoin - 1);
      } else {
        setStart((prevCoin) => prevCoin + 1);
      }
    }, 20);

    return () => clearInterval(setCoinInterval.current);
  }, [start, end]);

  useEffect(() => {
    if (start === end) {
      clearInterval(setCoinInterval.current);
    }
  }, [start, end]);

  return [start, setEnd];
};
