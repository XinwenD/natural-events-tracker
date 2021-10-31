import React from "react";
import { Icon } from "@iconify/react";
import MountainIcon from "@iconify/icons-ic/baseline-terrain";

const Volcanoes = ({ lat, lng, onClick }) => {
  return (
    <div className="volcanoes" onClick={onClick}>
      <Icon icon={MountainIcon} className="volcanoes-icon" />
    </div>
  );
};

export default Volcanoes;
