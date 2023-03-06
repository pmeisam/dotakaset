import React, { useState } from "react";
import styled from "styled-components";
import UploadMusicVideo from "../components/UploadMusicVideo";
import UploadSong from "../components/UploadSong";
import UploadSongAndMusicVideo from "../components/UploadSongAndMusicVideo";

export default function Upload() {
  const [songUpload, setSongUpload] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);
  const [songAndVideoUpload, setSongAndVideoUpload] = useState(false);

  const handleRenderUploadComponent = (song, video, both) => {
    setSongUpload(false);
    setVideoUpload(false);
    setSongAndVideoUpload(false);
    if (song) {
      setSongUpload(true);
      return;
    }
    if (video) {
      setVideoUpload(true);
      return;
    }
    if (both) {
      setSongAndVideoUpload(true);
      return;
    }
  };

  return (
    <UploadWrapper>
      <h2>Upload your art.</h2>
      <p>
        The process and approval takes about 7 weekdays. A dotakaset member will
        get in touch with you for next steps or if any additional information is
        needed.
      </p>
      <h4>Is the file a song or a music video or both?</h4>

      <button onClick={() => handleRenderUploadComponent(true, false, false)}>
        Upload Song
      </button>
      <button onClick={() => handleRenderUploadComponent(false, true, false)}>Upload Music Video</button>
      <button onClick={() => handleRenderUploadComponent(false, false, true)}>Upload Music Video and Song</button>
      {songUpload ? <UploadSong /> : null}
      {videoUpload ? <UploadMusicVideo /> : null}
      {songAndVideoUpload ? <UploadSongAndMusicVideo /> : null}
    </UploadWrapper>
  );
}

// rfc then ims
const UploadWrapper = styled.div`
  margin-top: 300px;
`;
