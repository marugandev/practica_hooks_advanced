import React, { useEffect, useState } from "react";

const UseGetDate = () => {
  console.log("Render UseGetDate");
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  console.log(date);

  return date;
};

export default UseGetDate;
