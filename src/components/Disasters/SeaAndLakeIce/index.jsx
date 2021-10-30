import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const SeaAndLakeIce = ({ lat, lng, onClick }) => {
  return (
    <div className="sea-and-lake-ice" onClick={onClick}>
      <Icon icon={FireIcon} className="sea-and-lake-ice-icon" />
    </div>
  );
};

export default SeaAndLakeIce;
