"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { YoutubeVideosResp } from "@/types/YoutubeResp";
import { donateImages } from "@/data/constant";
import { FaCamera } from "react-icons/fa6";

const videoData = [
  {
    id: 1,
    title: "Open Air Veranstaltung",
    url: "https://www.youtube.com/watch?v=your-video-id1",
    thumbnail: "/thumbnails/gallery1.png",
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
  ...donateImages.map((image, index) => ({
    id: index + 8, 
    title: `Donation Image ${index + 1}`,
    url: "https://www.youtube.com/watch?v=your-video-id2", 
    thumbnail: image,
  })),
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
        setLoading(false);
      }
    }
    getVideos();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-6 mt-24">
        
        {tab === "videos" ? (
          <>
          <FaYoutube size={28} color="red" />
          <h2 className="text-2xl font-[inter-bold] ">
            YouTube
          </h2>
          </>
        ) : (
          <>
          <FaCamera size={28} color="red" />
          <h2 className="text-2xl font-[inter-bold] ">Photos</h2>
          </>
        )}
      </div>

      <div className="flex gap-6 mb-4 border-b border-gray-700 pb-2">
        <button
          onClick={() => setTab("videos")}
          className={`text-sm uppercase cursor-pointer hover:text-amber-400 ${
            tab === "videos"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setTab("photos")}
          className={`text-sm uppercase cursor-pointer hover:text-amber-400 ${
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
          {loading
            ? // 👇 Show skeleton while loading
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[250px] bg-gray-200 animate-pulse rounded-md"
                >
                  <div className="h-[200px] bg-gray-300 rounded-t-md" />
                  <div className="h-4 mt-2 mx-2 bg-gray-300 rounded" />
                </div>
              ))
            : // 👇 Show videos when loaded
              videos.length > 0 &&
              videos.map((video: YoutubeVideosResp) => (
                <div key={video.id.videoId} className=" max-sm:mx-auto ">
                  <iframe
                    width="400"
                    height="225"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                className="rounded-lg object-cover w-full h-[250px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <p className="mt-2 text-sm font-medium">
                    {video.snippet.title}
                  </p>
                </div>
              ))}
              {videos.length > 0 && (
                <a
                href="https://www.youtube.com/@mowdministries.e.vgospelofsalv"
                target="_blank"
                className="w-full flex justify-center"
              >
                <button className=" text-[#fff]  mx-auto px-6 py-3 text-[12px] red-button rounded-md bg-[#ff0000] cursor-pointer min-md:text-lg font-[inter-bold] ">
                  See more
                </button>
              </a>
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
                className="rounded-lg object-cover w-full h-[250px] transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-end justify-start  transition pb-6 ">
                <span className=" bg-[#0000008f] w-auto flex items-center gap-2 px-2 rounded-bl-md py-2"> <p className="font-[inter-bold] text-[12px] md:text-[15px]">Watch on Youtube</p> <FaYoutube size={40} color="red" className="" /></span>
                </div> */}

              {/* <p className="mt-2 text-sm text-center">{video.title}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
