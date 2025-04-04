"use client";
import React, { Suspense, useRef } from "react";
import ReactPlayer from "react-player";

interface Player {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  isMuted: boolean;
  setIsMuted : (value: boolean) => void;
}

const BackgroundVideo: React.FC<Player> = ({ isPlaying, setIsPlaying, isMuted, setIsMuted }) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  if (playerRef.current) {
    if (isPlaying) {
      playerRef.current?.getInternalPlayer().pause();
    } else {
      playerRef.current.getInternalPlayer().play();
    }
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <ReactPlayer
        ref={playerRef}
        url="https://vid-cdn.website-editor.net/s/ec397ec3dcdd429fb15a940d37d92e42/videos/t9JcnH9iR9mNb6HHNW0A_Gebet+f%C3%BCr+Deutschland.p-v.mp4?Expires=1745862820&Signature=WH7zgYyNPBAemZOwqiFUw2yWEqrsEaGuDH4bSQiIHyQQyzUFgVPbZWTDrPlXxY1YLloSRHRZEU-BybEQOmM0Q0p8WF5UOeDya30mJYbrIBMzVUn-HHf~gxTI6laTv1dsFQpi~lXOoQTv1EeTu~Si5eQ7sRw4AmOInRLSJKEWNe66ebyScAoPiymHswjTzHlenBM6QpJFZBuksbsmIAv6j8ZsXuoLzHYDW7SOd9KJLPcYJoj2VCotu7ZvajdVIlcHByyd1JtXzV2yeOmA3T-Bt0r2IiptKh7Zd5w9wL68G7C~itSx~T6cn-iVL4F86hR~cql1IsvBqAPxBuv1z65ZNg__&Key-Pair-Id=K2NXBXLF010TJW" // Replace with your video URL
        playing={isPlaying}
        loop
        muted={isMuted}
        controls={false} // Hide default controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0 object-cover"
      />
      <Suspense fallback={null}></Suspense>
    </div>
  );
};

export default BackgroundVideo;
