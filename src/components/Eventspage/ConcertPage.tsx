import Countdown from "@/components/Eventspage/Countdown";
import Concert from "@/components/Eventspage/Concert";

const ConcertPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-6" style={{ backgroundImage: "url('/concert-bg.jpg')" }}>
      <div className="max-w-4xl w-full bg-opacity-90 bg-black text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Stay tuned for the next concert.</h1>
        
        <ul className="list-disc space-y-2 text-sm">
          <li>King David sang, praised, and danced before his GOD...</li>
          <li>The wall of JERICHO crumbles after the children of ISRAEL glorified GOD...</li>
          <li>The people of GOD were delivered from their enemies...</li>
          <li>The lame man knew how to preserve his miracle by singing...</li>
          <li>PAUL and SILAS sang and praised God...</li>
          <li>Doors that have been closed for years will open before you...</li>
        </ul>

        <div className="mt-6 bg-white text-black p-6 rounded-lg shadow-lg">
          <Countdown eventDate="2025-12-25T00:00:00" />
          <p className="text-center text-gray-600 my-4">Please fill out the registration form here</p>
          <Concert />
        </div>
      </div>
    </div>
  );
};

export default ConcertPage;
