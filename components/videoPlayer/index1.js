import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./index.module.css";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [width, setWidth] = useState("800px");

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 769) {
        setWidth("auto");
      }
    }
  }, []);

  useEffect(() => {
    const VideoLoaderWorker = new Worker(
      new URL("../../workers/videoWorker.js", import.meta.url)
    );
    const videoUrl =
      "https://vcana-website-assets.s3.us-east-1.amazonaws.com/images/home/viedohomepage.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQCZhAuveHG7l1EWCtubJDGc%2BgUAPPVOg6WMyH%2FNmjbMvgIgLKOrSU645BJ8sgHiuuFB%2Fqfu1M5IcPAharjkYqKOpOgq6AIIERACGgwwODAyMDQ4MTYwODciDLc8Aw0sX%2BuRZxl03SrFAtEO7vJab0Q9%2B%2BRA2E6b3jyYc65SleLfgqnr4xo88Xv4FXruCTFYjpUkmlfJeAc%2BPESDFSSn3lGKI%2FG4EyqR%2B%2BTDfqFAjSIMQqt%2BUZbGYna6DV5hF5BH8JX59FSjAIDTMydfPkL570dvESF%2BHbMoKgQR7qd%2BSPbWcWrIFO3CmpOA4gMQGZsu9XtJTQaUOy8cU2TZpeVl1Mv0PUfYjQ9ZThdE%2FRq6txS%2BnnZB4aYOjsOFbQ56WwLB1BIluR0CyYsOhRM4ojVqn2TqtdH9Dyzb2%2BgNBzizj9EvS%2BkxvOCySlanvJ5iHL3QBHFPYBs3kE19Pe3XUqy%2BSCdfwbj%2B1loa5RUnMadzQwMLp%2FKRPTXk4n6wS7f6kSYFt4Fr%2Bm9HncRaM8uNZsY%2F7QG9Yll6sqGkhV7OAcGtTwK1n1dbjOj2DBvr7gY%2FRcUwyLCutAY6swIdgQh6eh67hWmc32Yiff52LhO%2BF0ddWBFyt9bLjPxpQyLjXNMIwiOqZgogHqvEdF7z7zOkDoOoXwV4nIjM3Obo6IPqOmof0DxB82AITyFK6WxpNtazZt68dvidWpqN2GBc9%2Bi6XSddZysQp1MwVRl%2FeHJG4H10P%2F0AW4XXjjDWczuSxJo61MSGZlPEIZ8PSaHDYxsktwmtYhtn9OPykOVbXC6UMVt631hkoEe4PFyDMzJqJMN385dvXSjU670FzaZ%2ByXm1AJPQNNQRI8rk%2BnHXo1D9hSG87raIODqrxS5rcHd%2F%2FF0LBJIQhJTOEflyJPqGThWLbg92ZYoit1txdjZoli3U2QRquLv6DxaITxI6U22KwAvSd8qgdG%2BKL8bXE74Lz5A4JLOtPxcOitCuMpCPoc30&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240708T130827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARFLEUL3LW7OEYG6H%2F20240708%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=984ed381a326f1013f353a5216b54d70d74ee9a6743cbd4ce932eff975291aa7";

    VideoLoaderWorker.onmessage = (event) => {
      if (event.data.error) {
        console.error("Error loading video:", event.data.error);
      } else {
        setVideoUrl(event.data);
      }
    };

    VideoLoaderWorker.postMessage(videoUrl);

    // Cleanup worker on unmount
    return () => {
      VideoLoaderWorker.terminate();
    };
  }, []);

  if (!videoUrl) {
    return <div>Loading video...</div>;
  }

  return (
    <ReactPlayer
      url={videoUrl}
      className={styles.video_container}
      playing={true}
      autoplaying={true}
      loop={true}
      muted={true}
      playsinline={true}
      width={width}
      webkit-playsinline={true}
      height="auto"
    />
  );
};

export default VideoPlayer;
