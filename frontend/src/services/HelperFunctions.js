import FileServices from "./FileServices";
import { storage } from "../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function getDirectoryName(singer) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  // props.inputRef.current["singer"].value
  return `/${singer}/${mm + dd + yyyy}/`;
}

const handleCreateDoubleFiles = async (
  musicFile,
  videoFile,
  videoCoverFile,
  musicCoverFile,
  directory,
  props
) => {
  /*
    props includes
    setMusicPercentage ->   const [percentage, setPercentage] = useState(null);
    setVideoPercentage
    inputRef ->   const inputRef = useRef({});
  */
  handleCreateSingleFile(musicFile, musicCoverFile, directory, true, props);
  handleCreateSingleFile(videoFile, videoCoverFile, directory, false, props);
};

async function handleCreateSingleFile(
  file,
  coverFile,
  directory,
  isSong,
  props
) {
  /*
    props includes
    setPercentage ->   const [percentage, setPercentage] = useState(null);
    inputRef ->   const inputRef = useRef({});
  */

  // Create storage reference
  const storageRef = ref(storage, directory + file.name);

  // Upload the file to Firebase Storage
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Calculate upload percentage
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      ); // Update progress
      props.setPercentage(percent);
    },
    (err) => console.log(err),
    () => {
      // Get download url for server use
      getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
        let song = {
          name: props.inputRef.current["name"].value,
          lyricsBy: props.inputRef.current["lyrics_by"].value,
          singer: props.inputRef.current["singer"].value,
          studio: props.inputRef.current["studio"].value,
          musicFileURL: null,
          videoFileURL: null,
        };
        isSong ? (song.musicFileURL = url) : (song.videoFileURL = url);

        // Send the request to the server
        await FileServices.createFile(song);

        return url;
      });
    }
  );
}

export default {
  handleCreateSingleFile,
  getDirectoryName,
};
