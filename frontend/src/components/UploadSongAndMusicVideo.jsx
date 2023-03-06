import React, { useRef, useState } from "react";
import Functions from "../services/HelperFunctions";

export default function UploadSongAndMusicVideo() {
  const inputRef = useRef({});
  const [percentage, setPercentage] = useState(null);
  const [musicFile, setMusicFile] = useState("");
  const [videoFile, setVideoFile] = useState("");

  function handleMusicFileChange(event) {
    setMusicFile(event.taget.files[0]);
  }

  function handleVideoFileChange(event) {
    setVideoFile(event.target.files[0]);
  }

  const handleUploadSong = async (evt) => {
    evt.preventDefault();

    // Call the helper function to store file in storage and server usage
    await Functions.handleCreateDoubleFiles(
      musicFile,
      videoFile,
      null,
      null,
      Functions.getDirectoryName(inputRef.current["singer"].value),
      {
        inputRef,
        setPercentage,
      }
    );
  };

  return (
    <form onSubmit={handleUploadSong}>
      <p>Upload a song and a music video at once.</p>
      <input
        type="text"
        required={true}
        placeholder="Song's name"
        ref={(el) => (inputRef.current["name"] = el)}
      />
      <input
        type="text"
        placeholder="lyrics by"
        required={true}
        ref={(el) => (inputRef.current["lyrics_by"] = el)}
      />
      <input
        type="text"
        placeholder="singer"
        required={true}
        ref={(el) => (inputRef.current["singer"] = el)}
      />
      <input
        type="text"
        placeholder="studio"
        required={true}
        ref={(el) => (inputRef.current["studio"] = el)}
      />
      <input
        type="file"
        accept="audio/mpeg3"
        required={true}
        onChange={handleMusicFileChange}
        ref={(el) => (inputRef.current["music_file"] = el)}
      />
      <input
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        required={true}
        onChange={handleVideoFileChange}
        ref={(el) => (inputRef.current["video_file"] = el)}
      />
      <input type="submit" />
    </form>
  );
}
