// Globals
import "./styles.scss";
import React from "react";

// Misc
import PropTypes from "prop-types";

// Component
function Record({ data }) {
  return (
    <div className="qd-record">
      <div className="qd-record-ranking">{data.id}.</div>
      <div className="qd-record-image-container">
        <img className="qd-record-image" src={data.album.imageSrc} />
      </div>
      <div className="qd-record-details-container">
        <div className="qd-record-details-record">{data.album.title}</div>{" "}
        <div className="qd-record-details-artist">{data.artist.name}</div>
      </div>
    </div>
  );
}

Record.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export { Record };
