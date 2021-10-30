import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const TemperatureExtremes = ({ lat, lng, onClick }) => {
  return (
    <div className="temperature-extremes" onClick={onClick}>
      <Icon icon={FireIcon} className="temperature-extremes-icon" />
    </div>
  );
};

export default TemperatureExtremes;
