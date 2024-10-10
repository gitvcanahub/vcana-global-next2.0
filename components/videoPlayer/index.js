import React, { useState, useLayoutEffect } from "react";
import ReactPlayer from "react-player";
// import styles from "./index.module.css";

const VideoPlayer = () => {
  const [width, setWidth] = useState("800px");

  useLayoutEffect(() => {
    if (window) {
      if (window.innerWidth < 769) {
        setWidth("auto");
      }
    }
  }, []);

  return (
    <>
      <ReactPlayer
        url="./viedohomepage.mp4"
        playing={true}
        autoplaying={true}
        loop={true}
        muted={true}
        playsinline={true}
        width={""}
        webkit-playsinline={true}
        height={width}
      />
    </>
  );
};

export default VideoPlayer;
