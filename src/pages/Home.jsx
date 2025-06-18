import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const home = () => {
  let to = new Date("Jan 01, 2030 00:00:00").getTime();
  let [days, setDays] = useState();
  let [hours, setHours] = useState();
  let [minutes, setMinutes] = useState();
  let [seconds, setSeconds] = useState();

  const interval = () => {
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = to - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  };

  useEffect(() => {
    interval();
  });

  return (
    <div className="from-slate-900 via-blue-900 to-blue-800 bg-gradient-to-br w-full h-screen overflow-y-auto">
      <div className="d-flex flex-row justify-center items-center py-auto w-full h-full lg:p-20 p-10">
        <div className="border-2 border-white rounded-2xl w-full h-fit">
          <div className="m-auto bg-slate-200 w-1/2 p-3 rounded-b-lg">
            <div className="m-auto bg-slate-900 w-3 h-3 p-2 rounded-full">
              <div className=" bg-slate-100 w-1 h-1 rounded-full"></div>
            </div>
          </div>
          <div className="text-center mt-15 mb-5 w-1/2 m-auto ">
            <h1 className="lg:text-5xl text-2xl text-white">WE ARE COMING SOON</h1>
            <p className="text-white text-sm">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, libero vel, soluta voluptatibus accusamus autem laudantium ad eaque sunt deserunt quaerat laborum dolor molestias ex eligendi dicta similique minus voluptate.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-x-0 align-text-bottom py-0 lg:px-20 px-5  lg:mx-20 mx-1 my-10 text-center">
            <div className="d-flex flex-row text-white">
              <h1 className="lg:text-9xl md:text-7xl text-3xl">{days}</h1>
              <span className="text-sm">Days</span>
            </div>
            <div className="d-flex flex-row text-white">
              <h1 className="lg:text-9xl md:text-7xl text-3xl">{hours}</h1>
              <span className="text-sm">Hours</span>
            </div>
            <div className="d-flex flex-row text-white">
              <h1 className="lg:text-9xl md:text-7xl text-3xl">{minutes}</h1>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="d-flex flex-row text-white">
              <h1 className="lg:text-9xl md:text-7xl text-3xl">{seconds}</h1>
              <span className="text-sm">Seconds</span>
            </div>
           
          </div>
          <div className="text-center text-white m-auto p-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
