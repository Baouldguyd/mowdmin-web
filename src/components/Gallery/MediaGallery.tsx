
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const videoData = [
  {
    id: 1,
    title: "Open Air Veranstaltung",
    url: "https://www.youtube.com/watch?v=your-video-id1",
    thumbnail: "/thumbnails/video1.jpg",
  },
  {
    id: 2,
    title: "Event Highlights",
    url: "https://www.youtube.com/watch?v=your-video-id2",
    thumbnail: "/thumbnails/video2.jpg",
  },
  // Add more video objects
];

const MediaGallery = () => {
  const [tab, setTab] = useState<"videos" | "photos">("videos");

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <FaYoutube size={40} color="white" />
                </div>
              </a>
              <p className="mt-2 text-sm text-center">{video.title}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "photos" && (
        <div className="text-gray-400 italic">Photo gallery coming soon...</div>
      )}
    </div>
  );
}

export default MediaGallery
