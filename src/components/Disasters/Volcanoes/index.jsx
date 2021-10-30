import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Volcanoes = ({ lat, lng, onClick }) => {
  return (
    <div className="volcanoes-marker" onClick={onClick}>
      <Icon icon={FireIcon} className="volcanoes-icon" />
    </div>
  );
};

export default Volcanoes;
