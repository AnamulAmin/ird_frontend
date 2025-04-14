"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function PlayAudio({ audio }: { audio: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setCurrentTime(currentTime);
      setDuration(duration);
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = pos * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", () => setIsPlaying(false));
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <div
      className={`flex items-center gap-4 p-3 rounded-lg ${
        isPlaying && "bg-gray"
      }`}
    >
      <button
        onClick={togglePlay}
        className={`p-3 rounded-full transition-colors ${
          isPlaying ? "bg-red-500" : "bg-primary"
        }`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <Image
          src={isPlaying ? "/pause.png" : "/play.png"}
          width={24}
          height={24}
          alt={isPlaying ? "Pause icon" : "Play icon"}
        />
      </button>

      {isPlaying && (
        <div className="flex-1 flex items-center gap-3">
          <div
            className="flex-1 h-2 bg-gray-300 rounded-full cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      )}

      <audio ref={audioRef} src={audio} preload="metadata" className="hidden" />
    </div>
  );
}
