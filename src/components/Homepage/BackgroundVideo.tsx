"use client";
import React, { Suspense, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

interface Player {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
}

const BackgroundVideo: React.FC<Player> = ({
  isPlaying,
  setIsPlaying,
  isMuted,
}) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    const player = playerRef.current?.getInternalPlayer();

    if (player) {
      try {
        if (isPlaying) {
          player.play?.(); // some browsers might require .play() to be async
        } else {
          player.pause?.();
        }
      } catch (error) {
        console.error("Error controlling video playback:", error);
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full min-md:min-h-screen h-[50svh]">
      <ReactPlayer
        ref={playerRef}
        url="/video/heroVideo.mp4" 
        playing={isPlaying}
        loop
        muted={isMuted}
        controls={false}
        width="100%"
        height="100%"
        className="absolute top-0 left-0 object-cover"
      />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};

export default BackgroundVideo;
