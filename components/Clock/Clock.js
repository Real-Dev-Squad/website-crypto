import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const Clock = () => {
  const [time, SetTime] = useState();

  useEffect(() => {
    const intervalTime = setInterval(() => {
      const currentTime = DateTime.local();
      const stringTime = currentTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
      SetTime(stringTime);
    }, 250);
    return () => clearInterval(intervalTime);
  }, [time]);

  return (
    <>
      <div>
        <span>{time}</span>
      </div>
    </>
  );
};

export default Clock;
