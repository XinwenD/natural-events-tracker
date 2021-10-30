import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Drought = ({ lat, lng, onClick }) => {
  return (
    <div className="drought" onClick={onClick}>
      <Icon icon={FireIcon} className="drought-icon" />
    </div>
  );
};

export default Drought;
