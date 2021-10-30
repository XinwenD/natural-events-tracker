import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Manmade = ({ lat, lng, onClick }) => {
  return (
    <div className="manmade" onClick={onClick}>
      <Icon icon={FireIcon} className="manmade-icon" />
    </div>
  );
};

export default Manmade;
