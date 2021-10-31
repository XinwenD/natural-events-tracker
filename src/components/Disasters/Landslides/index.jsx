import React from "react";
import { Icon } from "@iconify/react";
import LandslidesIcon from "@iconify/icons-mdi/slope-downhill";

const Landslides = ({ lat, lng, onClick }) => {
  return (
    <div className="landslides" onClick={onClick}>
      <Icon icon={LandslidesIcon} className="landslides-icon" />
    </div>
  );
};

export default Landslides;
