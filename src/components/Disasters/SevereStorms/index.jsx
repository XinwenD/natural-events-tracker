import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const SevereStorms = ({ lat, lng, onClick }) => {
  return (
    <div className="severe-storms" onClick={onClick}>
      <Icon icon={FireIcon} className="severe-storms-icon" />
    </div>
  );
};

export default SevereStorms;
