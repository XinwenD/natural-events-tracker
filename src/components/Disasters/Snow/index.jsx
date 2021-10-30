import React from "react";
import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const Snow = ({ lat, lng, onClick }) => {
  return (
    <div className="snow" onClick={onClick}>
      <Icon icon={FireIcon} className="snow-icon" />
    </div>
  );
};

export default Snow;
