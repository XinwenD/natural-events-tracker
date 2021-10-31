import React from "react";
import { Icon } from "@iconify/react";
import MountainIcon from "@iconify/icons-ic/baseline-terrain";

const SeaAndLakeIce = ({ lat, lng, onClick }) => {
  return (
    <div className="sea-and-lake-ice" onClick={onClick}>
      <Icon icon={MountainIcon} className="sea-and-lake-ice-icon" />
    </div>
  );
};

export default SeaAndLakeIce;
