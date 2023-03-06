import React, { useRef, useState } from "react";
import Functions from "../services/HelperFunctions";

export default function UploadSong() {
  const inputRef = useRef({});
  const [percentage, setPercentage] = useState(null);
  const [file, setFile] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUploadSong = async (evt) => {
    evt.preventDefault();

    // Check for file existance
    if (!file) {
      alert("Please choose a file first!");
    }

    // Call the helper function to store file in storage and server usage
    await Functions.handleCreateSingleFile(
      file,
      null,
      Functions.getDirectoryName(inputRef.current["singer"].value),
      true,
      {
        inputRef,
        setPercentage,
      }
    );
  };

  return (
    <form onSubmit={handleUploadSong}>
      <p>Upload a song</p>
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
        ref={(el) => (inputRef.current["music_file"] = el)}
        onChange={handleChange}
      />
      <input type="submit" />
      {percentage > 0 && <p>{percentage}% Done.</p>}
    </form>
  );
}
