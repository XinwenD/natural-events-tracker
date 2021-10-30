import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const WaterColor = ({ lat, lng, onClick }) => {
  return (
    <div className="water-color" onClick={onClick}>
      <Icon icon={FireIcon} className="water-color-icon" />
    </div>
  );
};

export default WaterColor;
