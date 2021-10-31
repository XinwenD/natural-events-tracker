import React from "react";
import { Icon } from "@iconify/react";
import StormIcon from "@iconify/icons-ic/baseline-storm";

const SevereStorms = ({ lat, lng, onClick }) => {
  return (
    <div className="severe-storms" onClick={onClick}>
      <Icon icon={StormIcon} className="severe-storms-icon" />
    </div>
  );
};

export default SevereStorms;
