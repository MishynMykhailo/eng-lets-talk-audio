import React, { useState, useEffect, useRef } from "react";
import s from "./AudioPlayer.module.scss";

interface IProps {
  title: string;
  audio: string;
}

function AudioPlayer({ audio }: IProps) {
  const [audioPlay, setAudioPlay] = useState(Boolean);

  const audioTag = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioTag.current) {
      audioPlay ? audioTag.current.play() : audioTag.current.pause();
    }
  }, [audioPlay]);

  const handlerPlay = (): void => {
    setAudioPlay((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <div className={s.btnContainer}>
        <audio
          src={audio}
          ref={audioTag}
        />
        <div className={s.progressBar}>
          <div className={s.progress}></div>
        </div>
        <button className={s.btnRepeat}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
          </svg>
        </button>
        <button
          className={s.btnPlay}
          onClick={handlerPlay}
        >
          {!audioPlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
