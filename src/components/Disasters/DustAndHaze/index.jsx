import React from "react";
import { Icon } from "@iconify/react";
import DustIcon from "@iconify/icons-mdi/weather-windy";

const DustAndHaze = ({ lat, lng, onClick }) => {
  return (
    <div className="dust-and-haze" onClick={onClick}>
      <Icon icon={DustIcon} className="dust-and-haze-icon" />
    </div>
  );
};

export default DustAndHaze;
