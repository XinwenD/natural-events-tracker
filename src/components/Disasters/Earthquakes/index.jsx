import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Earthquakes = ({ lat, lng, onClick }) => {
  return (
    <div className="earthquakes" onClick={onClick}>
      <Icon icon={FireIcon} className="earthquakes-icon" />
    </div>
  );
};

export default Earthquakes;
