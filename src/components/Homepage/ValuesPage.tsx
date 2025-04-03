import Baptism from "@/assets/Icons/Values/Baptism";
import Charitable from "@/assets/Icons/Values/Charitable";
import Events from "@/assets/Icons/Values/Events";
import Worship from "@/assets/Icons/Values/Worship";
import crowd from "@/assets/Images/crowd.png";
import Image from "next/image";

const ValuesPage = () => {
  const values = [
    {
      name: "Events & Concerts",
      icon: <Events />,
      link: "",
    },
    {
      name: "Worship Shop",
      icon: <Worship />,
      link: "",
    },
    {
      name: "Baptism",
      icon: <Baptism />,
      link: "",
    },
    {
      name: "Charitable Acts",
      icon: <Charitable />,
      link: "",
    },
  ];
  return (
    <div className=" flex flex-col bg-[#fff] gap-4 h-auto">
      <div className=" h-auto  my-auto flex flex-col gap-6 md:px-6 md:mt-8">
        <p className="text-[#5D5D5D] text-2xl font-semibold text-center">
          OUR VALUES
        </p>
        <p className=" text-[#B3B3B3] text-center w-[70%] mx-auto ">
          we bring people together through inspiring events and concerts, offer
          faith-filled books in English, French, and German, and extend love
          through charity and Baptism. Join us in making a difference through
          worship, learning, and generosity
        </p>
        <div className=" flex md:gap-8 gap-4 mx-auto">
          {values.map((value, index) => (
            <div key={index} className="">
              <div className=" border border-[#B3B3B3] rounded-full md:w-50 md:h-50 w-30 h-30 flex justify-center items-center">
                {value.icon}
              </div>
              <p className=" text-center md:text-[15px] text-[12px]">
                {value.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" h-[45%] my-auto p-10 ">
        <div className="relative h-[75%] w-[70%] mx-auto">
          <Image src={crowd} alt="crowd" className=" w-full h-[250px]  md:h-70 rounded-md" />
          <div className=" h-[250px] md:h-70 absolute  top-10 left-10 w-full rounded-md ">
            <Image src={crowd} alt="crowd" className=" w-full h-full rounded-md" />
            <div className=" absolute flex flex-col gap-4 top-0 p-4 bg-[#0000008a] rounded-md h-full w-full ">
            <p className=" w-[35%] md:text-2xl font-[inter-bold] text-[#fff]">
              One Voice, One Spirit, One Worship
            </p>
            <p className=" text-[#fff] text-[12px] md:text-12px md:w-[60%] w-full">
              Join us for a powerful time of worship where hearts unite in
              praise and God's presence fills the atmosphere. Let’s lift our
              voices, raise our hands, and worship together in faith and love.
            </p>
            <button className=" py-3 px-4 w-30 md:mt-4 bg-[#FF0000] text-[#fff] text-[12px] rounded-md cursor-pointer">
              Discover More
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
