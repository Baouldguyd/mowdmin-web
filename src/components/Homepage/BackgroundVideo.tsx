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
        url="https://vid-cdn.website-editor.net/s/ec397ec3dcdd429fb15a940d37d92e42/videos/t9JcnH9iR9mNb6HHNW0A_Gebet+f%C3%BCr+Deutschland.p-v.mp4?Expires=1748668581&Signature=Sd6lMoR4JGU8HgZzmsDJjxC4~1Gn0s5uacAVQJitBk3zUohHgSCKKAWpcfooz4TYKCH6iz2-zJoDJmv~lB1B3ac1By9YPi22dsmZkQgp-itrwOy1hpz-mvo1WoKffo7Jy-ljDCj9Wie-FG0wGX6lUW798UmxRCsEwFkA46I1-hx~7QEM5d97w2iGezAbFYoEetAiWKsr3fjMIv3qEgC8soYTqBcmq3qiJnaXQZJBGTCcRhwzvcBB0kuGu-s-gH6Fhz~6bKyWqX-OOV6uRZSvAIJjLyEFYyB6Mv7aL~yI3RWateTF9nrCF30mCXSAt-xkGMDiU1TTu934-XuAQy0HeA__&Key-Pair-Id=K2NXBXLF010TJW" // Replace with your video URL
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
