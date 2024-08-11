import React, { useState, useEffect } from 'react';
import background_image from '../assets/images/Background.jpeg';
import bg from '../assets/images/bg.webp'

function Digital_Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // '0' hours should be '12'

    return `${`0${hours}`.slice(-2)}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div 
        className='relative h-[400px] w-[700px] p-5 flex flex-col justify-end items-center rounded-xl bg-cover bg-center' 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='text-7xl font-mono font-bold text-white mb-3'>
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
}

export default Digital_Clock;
