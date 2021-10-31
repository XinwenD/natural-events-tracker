import React from "react";
import { Icon } from "@iconify/react";
import DroughtIcon from "@iconify/icons-mdi/tailwind";

const Drought = ({ lat, lng, onClick }) => {
  return (
    <div className="drought" onClick={onClick}>
      <Icon icon={DroughtIcon} className="drought-icon" />
    </div>
  );
};

export default Drought;
