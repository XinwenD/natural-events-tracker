import React from "react";
import { Icon } from "@iconify/react";
import EarthquakeIcon from "@iconify/icons-mdi/waveform";

const Earthquakes = ({ lat, lng, onClick }) => {
  return (
    <div className="earthquakes" onClick={onClick}>
      <Icon icon={EarthquakeIcon} className="earthquakes-icon" />
    </div>
  );
};

export default Earthquakes;
