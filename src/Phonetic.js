import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="d-flex flex-sm-row">
          <div className="audioPlayer">
            <ReactAudioPlayer
              src={props.phonetic.audio}
              autoPlay={false}
              controls
            />
          </div>

          <div className="text">{props.phonetic.text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
