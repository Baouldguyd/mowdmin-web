import ebendbildes from "@/assets/Images/ebenbildes.png";
import prophecy from "@/assets/Images/prophecy.png";
import seed from "@/assets/Images/seed.png";
import christians from "@/assets/Images/christians.png";
import Image from "next/image";
import ArrowTopRight from "@/assets/Icons/Arrow/ArrowTopRight";

const ChurchMinistries = () => {
  const books = [
    {
      image: ebendbildes,
      description:
        "Why me??? This cry of distress, often uttered by most people, which makes or causes one to wonder if God really exists, has its answer and can be taken from our lips?",
      link: "",
      bg: "#fff",
    },
    {
      image: seed,
      description:
        "The healing that every person seeks exclusively from Jesus Christ is not only that of physical or spiritual illness, but also the healing and deliverance from the financial and....",
      link: "",
      bg: "#94864E",
    },
    {
      image: christians,
      description:
        "The Lord is good. In his fourth album, Pastor Maurille Osse invites us as Christians into the divine presence of Almighty God with powerful praise and worship.",
      link: "",
      bg: "#8A4131",
    },
    {
      image: prophecy,
      description:
        "Prophecies and revelations have been granted to many people but who have never seen their fulfillment. Others, through ignorance, were unable to wait and...",
      link: "",
      bg: "#B5A8AA",
    },
  ];
  return (
    <div className="min-h-[90svh] flex flex-col mt-16 px-4 ">
      {/* Knowledge */}
      <div className=" h-[30%]  bg-[#fff]  gap-2 grid md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr]">
        <div className=" ">
          <p className=" text-[#FF0000] text-[12px] font-[inter-extrabold] w-full">
            Knowledge and expertise
          </p>
          <p className=" font-bold text-[2.5rem] text-[#000] font-[inter-extrabold]">
            Explore our church ministries
          </p>
        </div>
        <div className=" mb-8">
          <p className=" text-[15px]">
            Discover inspirational books and albums filled with the Holy Spirit,
            designed to uplift and strengthen your faith. We offer a wide range
            of products through which we believe the Holy Spirit can touch lives
            and meet every need.
          </p>
          <button className=" red-button bg-[#FF0000] text-[#fff] px-4 py-2 rounded-md text-[12px] mt-6">
            Buy Now
          </button>
        </div>
      </div>
      {/* books */}
      <div className=" h-[70%]  flex gap-4 flex-wrap justify-around">
        {books.map((book, index) => (
          <div key={index} className="w-40 h-[80%] my-auto hover:border hover:border-[#B3B3B3] cursor-pointer">
            <Image
              src={book.image}
              alt=""
              style={{
                backgroundColor:` ${book.bg}`,
                borderRadius: "15px",
                borderBottomRightRadius: "0px",
                height: "11rem",
                marginBottom: "5px"
              }}
            />
            <div className=" flex flex-col justify-between max-sm:mb-8">
              <p className=" text-[13px] text-[#3A3A3A]">{book.description}</p>
              <button className=" font-[inter-bold] text-[12px] flex items-center mt-2 cursor-pointer">
                View More <ArrowTopRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchMinistries;
