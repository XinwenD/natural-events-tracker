import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Landslides = ({ lat, lng, onClick }) => {
  return (
    <div className="landslides" onClick={onClick}>
      <Icon icon={FireIcon} className="landslides-icon" />
    </div>
  );
};

export default Landslides;
