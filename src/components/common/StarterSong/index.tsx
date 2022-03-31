import ReactAudioPlayer from "react-audio-player";

export const StarterSong = () => {
  return (
    <div>
      <ReactAudioPlayer
        src="/assets/sounds/start-song.mp3"
        autoPlay={true}
        loop
        controls={false}
        className="audioElement"
      />
    </div>
  );
};
