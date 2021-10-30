import React from "react";

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

  const setMarkerVisibility = (type, vis) => {
    const marker = document.querySelectorAll(type);
    for (let i = 0; i < marker.length; i++) {
      marker[i].style.display = vis;
    }
  };

  const disasterHandler = (e) => {
    const checkStatus = e.target.checked;
    // console.log(e.target.id);
    let vis = "";
    if (checkStatus) {
      vis = "inline";
      switch (e.target.id * 1) {
        case 6:
          setMarkerVisibility(".drought", vis);
          break;
        case 7:
          setMarkerVisibility(".dust-and-haze", vis);
          break;
        case 8:
          setMarkerVisibility(".wildfire", vis);
          break;
        case 9:
          setMarkerVisibility(".floods", vis);
          break;
        case 10:
          setMarkerVisibility(".severe-storms", vis);
          break;
        case 12:
          setMarkerVisibility(".volcanoes", vis);
          break;
        case 13:
          setMarkerVisibility(".water-color", vis);
          break;
        case 14:
          setMarkerVisibility(".landslides", vis);
          break;
        case 15:
          setMarkerVisibility(".sea-and-lake-ice", vis);
          break;
        case 16:
          setMarkerVisibility(".earthquakes", vis);
          break;
        case 17:
          setMarkerVisibility(".snow", vis);
          break;
        case 18:
          setMarkerVisibility(".temperature-extreme", vis);
          break;
        case 19:
          setMarkerVisibility(".manmade", vis);
          break;
        default:
          break;
      }
    }
    if (!checkStatus) {
      vis = "none";
      switch (e.target.id * 1) {
        case 6:
          setMarkerVisibility(".drought", vis);
          break;
        case 7:
          setMarkerVisibility(".dust-and-haze", vis);
          break;
        case 8:
          setMarkerVisibility(".wildfire", vis);
          break;
        case 9:
          setMarkerVisibility(".floods", vis);
          break;
        case 10:
          setMarkerVisibility(".severe-storms", vis);
          break;
        case 12:
          setMarkerVisibility(".volcanoes", vis);
          break;
        case 13:
          setMarkerVisibility(".water-color", vis);
          break;
        case 14:
          setMarkerVisibility(".landslides", vis);
          break;
        case 15:
          setMarkerVisibility(".sea-and-lake-ice", vis);
          break;
        case 16:
          setMarkerVisibility(".earthquakes", vis);
          break;
        case 17:
          setMarkerVisibility(".snow", vis);
          break;
        case 18:
          setMarkerVisibility(".temperature-extreme", vis);
          break;
        case 19:
          setMarkerVisibility(".manmade", vis);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="disaster-selector">
      <h1> Please select the event type &#8595;</h1>
      <ul className="categories">
        {categoryData &&
          categoryData.map((cat, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  id={cat.id}
                  name={cat.title}
                  onChange={(e) => disasterHandler(e)}
                />
                <label htmlFor={cat.title}>{cat.title}</label>
              </li>
            );
          })}
      </ul>
      {/* <div className="button-container">
        <button className="collapse-button" onClick={collapse}>
          Collapse
        </button>
      </div> */}
    </div>
  );
};

export default DisasterSelector;
