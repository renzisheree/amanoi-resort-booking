import thumbVideo from "../videos/thumbVideoAmanoi.mp4";

const VideoAutoplay = () => {
  return (
    <div className="flex flex-col items-center justify-center z-0 ">
      <video
        width={1580}
        height={720}
        controls
        autoPlay
        muted
        src={thumbVideo}
      ></video>
    </div>
  );
};

export default VideoAutoplay;
