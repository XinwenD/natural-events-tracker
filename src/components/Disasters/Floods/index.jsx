import React from "react";
import { Icon } from "@iconify/react";
import FloodIcon from "@iconify/icons-mdi/waves-arrow-up";

const Floods = ({ lat, lng, onClick }) => {
  return (
    <div className="floods" onClick={onClick}>
      <Icon icon={FloodIcon} className="floods-icon" />
    </div>
  );
};

export default Floods;
