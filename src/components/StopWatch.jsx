import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer running state

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time as HH:MM:SS
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='bg-gray-200 h-96 p-5 flex flex-col justify-center items-center rounded-xl'>
        <div className='text-9xl font-mono font-bold'>
          {formatTime(time)}
        </div>

        <div className='m-4 gap-4'>
          <button 
            className='bg-green-500 text-black text-4xl font-mono font-bold px-10 py-3 rounded-md mr-5' 
            onClick={handleStart}
          >
            Start
          </button>
          <button 
            className='bg-red-500 text-black text-4xl font-mono font-bold px-10 py-3 rounded-md mr-5' 
            onClick={handleStop}
          >
            Stop
          </button>
          <button 
            className='bg-blue-500 text-black text-4xl font-mono font-bold px-10 py-3 rounded-md mr-5' 
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
