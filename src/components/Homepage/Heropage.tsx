"use client";
import React, { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import PlayButton from "@/assets/Icons/Buttons/PlayButton";
import { PauseCircleIcon } from "lucide-react";
import PauseButton from "@/assets/Icons/Buttons/PauseButton";
import VolumeButton from "@/assets/Icons/Buttons/VolumeButton";
import "./slider.css";
import MuteButton from "@/assets/Icons/Buttons/MuteButton";

const Heropage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  return (
    <div className="min-h-[90svh] bg-[#000] relative">
      <div className=" h-[72%] md:px-20 md:mt-[-80]">
        <BackgroundVideo
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <div className=" h-[18%] bg-[#04072533] w-full absolute bottom-5">
        <div className="p-6 flex justify-between">
          {/* Text */}
          <div className=" w-[70%]">
            <p className=" text-white text-3xl font-semibold">
              JESUS CHRIST LOVES YOU
            </p>
            <p className=" text-[#CFCFCF]">
              we share the unwavering truth that Jesus loves you
              unconditionally, offering grace, hope, and salvation to all who
              seek Him.
            </p>
          </div>
          {/* Video Play Controls */}
          <div className="  h-full w-[30%] my-auto flex items-center">
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
              className=" text-black p-2 rounded-full cursor-pointer"
            >
              {!isPlaying ? <PlayButton /> : <PauseButton />}
            </button>

            <input
              type="range"
              className="video-progress-slider"
              min="0"
              max="100"
              // onChange={(e) => {
              //   const duration = playerRef.current?.getDuration() || 0;
              //   playerRef.current?.seekTo(
              //     (e.target.valueAsNumber * duration) / 100
              //   );
              // }}
            />
            {isPlaying && (
              <span className=" pl-4 flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsMuted(!isMuted);
                  }}
                  className=" cursor-pointer"
                >
                  {isMuted ? <MuteButton /> : <VolumeButton />}
                </button>

                <input
                  type="range"
                  className="video-progress-slider"
                  min="0"
                  max="100"
                  // onChange={(e) => {
                  //   const duration = playerRef.current?.getDuration() || 0;
                  //   playerRef.current?.seekTo(
                  //     (e.target.valueAsNumber * duration) / 100
                  //   );
                  // }}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
