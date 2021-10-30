import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const DustAndHaze = ({ lat, lng, onClick }) => {
  return (
    <div className="dust-and-haze" onClick={onClick}>
      <Icon icon={FireIcon} className="dust-and-haze-icon" />
    </div>
  );
};

export default DustAndHaze;
