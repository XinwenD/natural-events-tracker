import React from "react";
import { Icon } from "@iconify/react";
import SnowIcon from "@iconify/icons-mdi/weather-snowy-heavy";

const Snow = ({ lat, lng, onClick }) => {
  return (
    <div className="snow" onClick={onClick}>
      <Icon icon={SnowIcon} className="snow-icon" />
    </div>
  );
};

export default Snow;
