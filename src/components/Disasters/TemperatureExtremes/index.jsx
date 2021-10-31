import React from "react";
import { Icon } from "@iconify/react";
import TempIcon from "@iconify/icons-mdi/sun-thermometer-outline";

const TemperatureExtremes = ({ lat, lng, onClick }) => {
  return (
    <div className="temperature-extremes" onClick={onClick}>
      <Icon icon={TempIcon} className="temperature-extremes-icon" />
    </div>
  );
};

export default TemperatureExtremes;
