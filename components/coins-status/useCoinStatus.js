import { useState, useEffect, useRef } from 'react';

export const useAnimateValue = (startPoint, endPoint, duration) => {
  const [start, setStart] = useState(startPoint);
  const [end, setEnd] = useState(endPoint);
  let startTimestamp = useRef(null);
  const step = (timestamp) => {
    if (!startTimestamp.current) startTimestamp.current = timestamp;
    const progress = Math.min(
      (timestamp - startTimestamp.current) / duration,
      1
    );
    setStart(Math.floor(progress * (end - startPoint) + startPoint));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      startTimestamp.current = null;
    }
  };
  useEffect(() => {
    startPoint = start;
    window.requestAnimationFrame(step);
  }, [end]);
  return [start, setEnd];
};
