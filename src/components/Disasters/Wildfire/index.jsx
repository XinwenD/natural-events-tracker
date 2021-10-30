import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Wildfire = ({ lat, lng, onClick }) => {
  return (
    <div className="wildfire-marker" onClick={onClick}>
      <Icon icon={FireIcon} className="wildfire-icon" />
    </div>
  );
};

export default Wildfire;
