import React from "react";
import { Icon } from "@iconify/react";
import WaterIcon from "@iconify/icons-mdi/water-opacity";

const WaterColor = ({ lat, lng, onClick }) => {
  return (
    <div className="water-color" onClick={onClick}>
      <Icon icon={WaterIcon} className="water-color-icon" />
    </div>
  );
};

export default WaterColor;
