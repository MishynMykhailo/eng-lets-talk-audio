import React, { useState, useEffect, useRef } from "react";
import s from "./AudioPlayer.module.scss";
import { ReactComponent as PlayIcon } from "./btnPlay.svg";
import { ReactComponent as StopIcon } from "./btnStop.svg";
import { ReactComponent as RepeatIcon } from "./btnRepeat.svg";

interface AudioPlayerProps {
  audioSrc: string; // Теперь требуется только один источник
}

function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeProgress, setCurrentTimeProgress] = useState(0);
  const [durationFormatted, setDurationFormatted] = useState("00:00");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.src = audioSrc;

      const handleMetadataLoaded = () => {
        setDurationFormatted(formatTime(audioElement.duration));
      };

      const updateTimeProgress = () => {
        setCurrentTimeProgress(
          (audioElement.currentTime / audioElement.duration) * 100
        );
      };

      const handleAudioEnd = () => {
        setIsPlaying(false);
        setCurrentTimeProgress(0);
      };

      audioElement.addEventListener("loadedmetadata", handleMetadataLoaded);
      audioElement.addEventListener("timeupdate", updateTimeProgress);
      audioElement.addEventListener("ended", handleAudioEnd);

      return () => {
        audioElement.removeEventListener(
          "loadedmetadata",
          handleMetadataLoaded
        );
        audioElement.removeEventListener("timeupdate", updateTimeProgress);
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [audioSrc]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const pad = (num: number) => (num < 10 ? `0${num}` : String(num));
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const resetAudioProgress = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.currentTime = 0;
    setCurrentTimeProgress(0);
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const newTime = (offsetX / rect.width) * audioElement.duration;
    audioElement.currentTime = newTime;
    setCurrentTimeProgress((offsetX / rect.width) * 100);
  };

  return (
    <div>
      <p>
        {formatTime(audioRef.current?.currentTime || 0)}/{durationFormatted}
      </p>
      <audio ref={audioRef} />
      <div
        className={s.progressBar}
        onClick={handleProgressBarClick}
      >
        <div
          style={{ width: `${currentTimeProgress}%` }}
          className={s.progress}
        />
      </div>
      <div className={s.btnContainer}>
        <button
          className={s.btnRepeat}
          onClick={resetAudioProgress}
        >
          <RepeatIcon />
        </button>
        <button
          className={s.btnPlay}
          onClick={togglePlayPause}
        >
          {isPlaying ? <StopIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
