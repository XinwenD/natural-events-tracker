import React from "react";
import { Icon } from "@iconify/react";
import ManIcon from "@iconify/icons-mdi/account-alert";

const Manmade = ({ lat, lng, onClick }) => {
  return (
    <div className="manmade" onClick={onClick}>
      <Icon icon={ManIcon} className="manmade-icon" />
    </div>
  );
};

export default Manmade;
