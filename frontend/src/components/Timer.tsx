// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const end = new Date("2024-06-20")

// const Timer = () => {
//   return (
//     // <div>Timer</div>
//     <Countdown date={end}/>
//   )
// }

// export default Timer

"use client"
import React, { useState, useEffect } from "react";

const Timer = () => {
  
  let difference = +new Date(`09/10/2024`) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}:{h}:{m}:{s}
    </span>
  );
};

export default Timer;