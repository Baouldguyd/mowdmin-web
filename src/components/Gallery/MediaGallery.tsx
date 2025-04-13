
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const videoData = [
  {
    id: 1,
    title: "Open Air Veranstaltung",
    url: "https://www.youtube.com/watch?v=your-video-id1",
    thumbnail: "/thumbnails/gallery1.png"
  },
  {
    id: 2,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery2.png",
  },
  {
    id: 3,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery3.png",
  },
  {
    id: 4,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery4.png",
  },
  {
    id: 5,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery5.png",
  },
  {
    id: 6,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery6.png",
  },
  {
    id: 7,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/gallery7.png",
  },
  // Add more video objects
];

const MediaGallery = () => {
  const [tab, setTab] = useState<"videos" | "photos">("videos");

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-6">
        <FaYoutube size={28} color="red" />
        <h2 className="text-2xl font-semibold">YouTube</h2>
      </div>

      <div className="flex gap-6 mb-4 border-b border-gray-700 pb-2">
        <button
          onClick={() => setTab("videos")}
          className={`text-sm uppercase ${
            tab === "videos"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setTab("photos")}
          className={`text-sm uppercase ${
            tab === "photos"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400"
          }`}
        >
          Photos
        </button>
      </div>

      {tab === "videos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videoData.map((video) => (
            <div key={video.id} className="relative group">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-end justify-start  transition pb-6 ">
                <span className=" bg-[#0000008f] w-auto flex items-center gap-2 px-2 rounded-bl-md py-2"> <p className="font-[inter-bold] text-[12px] md:text-[15px]">Watch on Youtube</p> <FaYoutube size={40} color="red" className="" /></span>
                </div>
              </a>
              <p className="mt-2 text-sm text-center">{video.title}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "photos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videoData.map((video) => (
            <div key={video.id} className="relative group">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="rounded-lg object-cover w-full"
                />
                {/* <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-end justify-start  transition pb-6 ">
                <span className=" bg-[#0000008f] w-auto flex items-center gap-2 px-2 rounded-bl-md py-2"> <p className="font-[inter-bold] text-[12px] md:text-[15px]">Watch on Youtube</p> <FaYoutube size={40} color="red" className="" /></span>
                </div> */}
              
              {/* <p className="mt-2 text-sm text-center">{video.title}</p> */}
            </div>
          ))}
        </div>      )}
    </div>
  );
}

export default MediaGallery
