import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Floods = ({ lat, lng, onClick }) => {
  return (
    <div className="floods" onClick={onClick}>
      <Icon icon={FireIcon} className="floods-icon" />
    </div>
  );
};

export default Floods;
