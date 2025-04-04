import React from "react";

const EventsHeroPage = () => {
  const countDown = [
    {
      period: "16",
      time: "Days",
    },
    {
      period: "01",
      time: "Hours",
    },
    {
      period: "47",
      time: "Minutes",
    },
    {
      period: "12",
      time: "Seconds",
    },
  ];
  return (
    <div className=" min-h-[90svh] relative flex items-end justify-center bg-green-600">
      <div className="  bg-[#040725] rounded-lg w-[90%]  absolute -bottom-12 p-6 flex flex-col gap-4 h-auto">
        <p className=" font-[inter-bold] text-center text-[22px] md:text-[2.2rem] text-[#fff] ">
          SEMINARY, CHRISTIANITY AND NUTRITION
        </p>
        <p className=" text-center text-[#fff]">
          Mowdministries-Event Countdown in:
        </p>
        <div className=" flex gap-8 mx-auto w-fit">
          {
            countDown.map((count, index) => (
                <div key={index} className=" flex flex-col ">
            <div className=" h-25 w-25 bg-[#FFFFFF] flex items-center justify-center rounded-full  border-[#B3B3B3] border-3 ">
              <p className=" text-[3.5rem] font-[inter-bold]">{count.period}</p>
            </div>
            <p className=" text-[#fff] text-center text-[15px] ">{count.time}</p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default EventsHeroPage;
