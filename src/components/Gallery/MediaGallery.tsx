
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { YoutubeVideosResp } from "@/types/YoutubeResp";

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
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideos() {
      try {
        const res = await fetch("/api/youtube");
        const fetchedVideos = await res.json();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos", error);
      } finally {
        setLoading(false); // Done loading
      }
    }
    getVideos();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-6 mt-14">
        <FaYoutube size={28} color="red" />
        <h2 className="text-2xl font-[inter-bold]">YouTube</h2>
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
         <div className="flex flex-wrap gap-4">
         {loading ? (
           // 👇 Show skeleton while loading
           Array.from({ length: 6 }).map((_, index) => (
             <div
               key={index}
               className="w-[300px] h-[250px] bg-gray-200 animate-pulse rounded-md"
             >
               <div className="h-[200px] bg-gray-300 rounded-t-md" />
               <div className="h-4 mt-2 mx-2 bg-gray-300 rounded" />
             </div>
           ))
         ) : (
           // 👇 Show videos when loaded
           videos.map((video: YoutubeVideosResp) => (
             <div key={video.id.videoId} className="w-[300px]">
               <iframe
                 width="300"
                 height="200"
                 src={`https://www.youtube.com/embed/${video.id.videoId}`}
                 title={video.snippet.title}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 className="rounded-t-md"
               />
               <p className="mt-2 text-sm font-medium">{video.snippet.title}</p>
             </div>
           ))
         )}
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
