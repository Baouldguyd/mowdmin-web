import Countdown from "@/components/Eventspage/Countdown";
import Concert from "@/components/Eventspage/Concert";
import Image from "next/image";
import peopleImg from "@/assets/Images/people-festival-bg.png"

const ConcertPage = () => {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center p-6"
    >
      <Image src={peopleImg} alt="" className=" h-full w-fit absolute top-0 " />
      <div className="max-w-4xl w-full bg-opacity-90 bg-[#040725AD] z-10 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-[inter-bold] text-center mb-4 ">
          Stay tuned for the next concert.
        </h1>

        <div className=" flex gap-4 justify-center flex-col md:flex-row px-4">
          <div className=" h-full md:w-[50%] w-full">
            <ul className="h-full flex flex-col justify-between gap-6 font-[inter-regular]">
              <li>
                King David sang, praised and danced before his GOD, and his
                enemies became barren. What your God wants for you is that you
                come before him into his house with a willing heart and
                everything you have and just as you are with praise, the fruit
                of your lips. (Psalm 95 v2)
              </li>
              <li>
                The wall of JERICHO crumbles after the children of ISRAEL
                glorified GOD and walked around the wall for 7 days.
              </li>
              <li>
                The people of GOD were delivered from the hands of their enemies
                under the rule of Jehoshaphat, only by singing and glorifying
                God. (II CHRONICLES 20v21-22; 26-29).
              </li>
              <li>
                The lame man knew how to preserve his miracle by singing,
                dancing, jumping and praising his God in the temple (Acts 3v8)
              </li>
              <li>
                PAUL and SILAS sang and praised God and the prison doors were
                broken open.
              </li>
              <li>
                Doors that have been closed for years will open before you when
                you can praise GOD with all your heart, soul and mind.
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white w-auto text-black p-6 rounded-lg shadow-lg md:w-[50%] ">
            <Countdown eventDate="2025-12-25T00:00:00" />
            <p className="text-center text-gray-600 my-4">
              Please fill out the registration form here
            </p>
            <Concert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertPage;
