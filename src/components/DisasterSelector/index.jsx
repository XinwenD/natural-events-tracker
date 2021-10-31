import React from "react";
import { Icon } from "@iconify/react";
import DroughtIcon from "@iconify/icons-mdi/tailwind";
import DustIcon from "@iconify/icons-mdi/weather-windy";
import EarthquakeIcon from "@iconify/icons-mdi/waveform";
import FloodIcon from "@iconify/icons-mdi/waves-arrow-up";
import LandslidesIcon from "@iconify/icons-mdi/slope-downhill";
import ManIcon from "@iconify/icons-mdi/account-alert";
import MountainIcon from "@iconify/icons-ic/baseline-terrain";
import StormIcon from "@iconify/icons-ic/baseline-storm";
import SnowIcon from "@iconify/icons-mdi/weather-snowy-heavy";
import TempIcon from "@iconify/icons-mdi/sun-thermometer-outline";
import WaterIcon from "@iconify/icons-mdi/water-opacity";
import FireIcon from "@iconify/icons-mdi/fire-alert";

const DisasterSelector = ({ categoryData }) => {
  // const expand = () => {
  //   const selector = document.querySelector(".disaster-selector");
  //   selector.style.maxHeight = "600px";
  //   selector.style.transition = "max-height 0.5s ease-out";
  // };

  // const collapse = () => {
  //   const selector = document.querySelector(".disaster-selector");
  //   console.log("@", selector.style);
  //   selector.style.maxHeight = "45px";
  //   selector.style.transition = "max-height 0.5s ease-in";
  // };

  const iconSets = (id) => {
    switch (id) {
      case "icon-6":
        return <Icon icon={DroughtIcon} className="drought-icon" />;
      case "icon-7":
        return <Icon icon={DustIcon} className="dust-icon" />;
      case "icon-8":
        return <Icon icon={FireIcon} className="wildfire-icon" />;
      case "icon-9":
        return <Icon icon={FloodIcon} className="flood-icon" />;
      case "icon-10":
        return <Icon icon={StormIcon} className="storm-icon" />;
      case "icon-12":
        return <Icon icon={MountainIcon} className="volcanoes-icon" />;
      case "icon-13":
        return <Icon icon={WaterIcon} className="water-icon" />;
      case "icon-14":
        return <Icon icon={LandslidesIcon} className="landslides-icon" />;
      case "icon-15":
        return <Icon icon={MountainIcon} className="sea-and-lake-ice-icon" />;
      case "icon-16":
        return <Icon icon={EarthquakeIcon} className="earthquake-icon" />;
      case "icon-17":
        return <Icon icon={SnowIcon} className="snow-icon" />;
      case "icon-18":
        return <Icon icon={TempIcon} className="temp-icon" />;
      case "icon-19":
        return <Icon icon={ManIcon} className="manmade-icon" />;
      default:
        break;
    }
  };

  const setMarkerVisibility = (type, vis, num) => {
    const marker = document.querySelectorAll(type);
    const p = document.getElementById(`event-p-${num}`);
    p.style.display = vis[1];
    for (let i = 0; i < marker.length; i++) {
      marker[i].style.display = vis[0];
    }
  };

  const countMarker = (type, num) => {
    const marker = document.querySelectorAll(type);
    const span = document.getElementById(`event-${num}`);
    let count = marker.length;
    span.innerHTML = count;
  };

  const disasterHandler = (e) => {
    const checkStatus = e.target.checked;
    // console.log(e.target.id);
    let vis = "";
    if (checkStatus) {
      vis = ["inline", "block"];
      switch (e.target.id * 1) {
        case 6:
          setMarkerVisibility(".drought", vis, 6);
          countMarker(".drought", 6);
          break;
        case 7:
          setMarkerVisibility(".dust-and-haze", vis, 7);
          countMarker(".dust-and-haze", 7);
          break;
        case 8:
          setMarkerVisibility(".wildfire", vis, 8);
          countMarker(".wildfire", 8);
          break;
        case 9:
          setMarkerVisibility(".floods", vis, 9);
          countMarker(".floods", 9);
          break;
        case 10:
          setMarkerVisibility(".severe-storms", vis, 10);
          countMarker(".severe-storms", 10);
          break;
        case 12:
          setMarkerVisibility(".volcanoes", vis, 12);
          countMarker(".volcanoes", 12);
          break;
        case 13:
          setMarkerVisibility(".water-color", vis, 13);
          countMarker(".water-color", 13);
          break;
        case 14:
          setMarkerVisibility(".landslides", vis, 14);
          countMarker(".landslides", 14);
          break;
        case 15:
          setMarkerVisibility(".sea-and-lake-ice", vis, 15);
          countMarker(".sea-and-lake-ice", 15);
          break;
        case 16:
          setMarkerVisibility(".earthquakes", vis, 16);
          countMarker(".earthquakes", 16);
          break;
        case 17:
          setMarkerVisibility(".snow", vis, 17);
          countMarker(".snow", 17);
          break;
        case 18:
          setMarkerVisibility(".temperature-extreme", vis, 18);
          countMarker(".temperature-extreme", 18);
          break;
        case 19:
          setMarkerVisibility(".manmade", vis, 19);
          countMarker(".manmade", 19);
          break;
        default:
          break;
      }
    }
    if (!checkStatus) {
      vis = ["none", "none"];
      switch (e.target.id * 1) {
        case 6:
          setMarkerVisibility(".drought", vis, 6);
          countMarker(".drought", 6);
          break;
        case 7:
          setMarkerVisibility(".dust-and-haze", vis, 7);
          countMarker(".dust-and-haze", 7);
          break;
        case 8:
          setMarkerVisibility(".wildfire", vis, 8);
          countMarker(".wildfire", 8);
          break;
        case 9:
          setMarkerVisibility(".floods", vis, 9);
          countMarker(".floods", 9);
          break;
        case 10:
          setMarkerVisibility(".severe-storms", vis, 10);
          countMarker(".severe-storms", 10);
          break;
        case 12:
          setMarkerVisibility(".volcanoes", vis, 12);
          countMarker(".volcanoes", 12);
          break;
        case 13:
          setMarkerVisibility(".water-color", vis, 13);
          countMarker(".water-color", 13);
          break;
        case 14:
          setMarkerVisibility(".landslides", vis, 14);
          countMarker(".landslides", 14);
          break;
        case 15:
          setMarkerVisibility(".sea-and-lake-ice", vis, 15);
          countMarker(".sea-and-lake-ice", 15);
          break;
        case 16:
          setMarkerVisibility(".earthquakes", vis, 16);
          countMarker(".earthquakes", 16);
          break;
        case 17:
          setMarkerVisibility(".snow", vis, 17);
          countMarker(".snow", 17);
          break;
        case 18:
          setMarkerVisibility(".temperature-extreme", vis, 18);
          countMarker(".temperature-extreme", 18);
          break;
        case 19:
          setMarkerVisibility(".manmade", vis, 19);
          countMarker(".manmade", 19);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="disaster-selector">
      <div className="title-container">
        <h1> Please select the event type &#8595;</h1>
      </div>
      <div className="disaster-container">
        <ul className="categories">
          {categoryData &&
            categoryData.map((cat, index) => {
              return (
                <div key={index}>
                  <li>
                    <input
                      type="checkbox"
                      id={cat.id}
                      name={cat.title}
                      onChange={(e) => disasterHandler(e)}
                    />
                    <span id={`icon-${cat.id}`}>
                      {iconSets(`icon-${cat.id}`)}
                    </span>
                    <label htmlFor={cat.title}>{cat.title}</label>
                  </li>

                  <p id={`event-p-${cat.id}`}>
                    <span id={`event-${cat.id}`}></span> {cat.title} events in
                    the datasets.
                  </p>
                </div>
              );
            })}
        </ul>
        {/* <div className="button-container">
        <button className="collapse-button" onClick={collapse}>
          Collapse
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default DisasterSelector;
