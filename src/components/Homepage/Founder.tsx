import React from "react";
import clergy from "@/assets/Images/Founder/founder1.png";
import founderinWhite from "@/assets/Images/Founder/founder3.png";
import Image from "next/image";
import founderandWife from "@/assets/Images/Founder/founder2.png";

const Founder = () => {
  const foundersImg = [
    {
      image: clergy,
      link: "",
    },
    {
      image: founderinWhite,
      link: "",
    },
    // {
    //   image: "",
    //   link: "",
    // },
  ];
  return (
    <div className=" flex flex-col h-auto ">
      <div className="flex bg-[#F8F8F8] h-[50%] rounded-md py-2 px-3 gap-4 md:h-auto md:justify-around">
        {foundersImg.map((img, index) => (
          <div className=" h-[75%] flex flex-col gap-4" key={index}>
            <Image
              src={img.image}
              alt=""
              className="h-full rounded-md md:w-[450px] md:h-[500px] "
            />
            <button className=" cursor-pointer text-[#fff] bg-[#040725] mx-auto rounded-md py-3 px-4 md:px-7 md:py-2 text-[12px] md:text-[14.5px] ">
              Further
            </button>
          </div>
        ))}
      </div>
      <div className=" flex gap-6 p-2 w-full justify-center">
        <Image
          src={founderandWife}
          alt=""
          className="h-full rounded-md w-[50%] md:w-[400px] md:h-[400px] "
        />
        <div className=" w-[50%] my-auto ">
          <p className=" text-[12px] md:text-[15px] leading-7 md:leading-10 mb-6">
            Born in Cotonou, Benin Republic, Rev. MAURILLE BAMIGBOLA OSSE is the
            President and Founder of Mowdministries {"("}Maurille Osse Worldwide
            Deliverance Ministries{")"} and the Supervisor of the Gospel of
            Salvation. Former student of the SMB, now the Bible Institute of
            Benin {"(IBB)"}, he has been active in evangelization for more than two
            decades. God gave him clear and prophetic news that he was bringing
            salvation and hope to his people. Remarkable signs, wonders and
            wonders of God testify about his teaching. He is happily married to
            Ruth and they received three blessed children from God.
          </p>
          <button className=" cursor-pointer text-[#fff] bg-[#040725]  rounded-md py-3 px-4 md:px-7 md:py-2 text-[12px] md:text-[14.5px] ">
            Further
          </button>
        </div>
      </div>
    </div>
  );
};

export default Founder;
