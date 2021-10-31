import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Drought from "../Disasters/Drought";
import DustAndHaze from "../Disasters/DustAndHaze";
import Wildfire from "../Disasters/Wildfire";
import Floods from "../Disasters/Floods";
import SevereStorms from "../Disasters/SevereStorms";
import Volcanoes from "../Disasters/Volcanoes";
import WaterColor from "../Disasters/WaterColor";
import Landslides from "../Disasters/Landslides";
import SeaAndLakeIce from "../Disasters/SeaAndLakeIce";
import Earthquakes from "../Disasters/Earthquakes";
import Snow from "../Disasters/Snow";
import TemperatureExtreme from "../Disasters/TemperatureExtremes";
import Manmade from "../Disasters/Manmade";
import LocationInfo from "../LocationInfo";
import {
  DROUGHT,
  DUST_AND_HAZE,
  WILDFIRE,
  FLOODS,
  SEVERE_STORMS,
  VOLCANOES,
  WATER_COLOR,
  LANDSLIDES,
  SEA_AND_LAKE_ICE,
  EARTHQUAKES,
  SNOW,
  TEMPERATURE_EXTREMES,
  MANMADE,
} from "../Categories";

const Map = ({ eventData, categoryData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    switch (ev.categories[0].id) {
      case DROUGHT:
        return (
          <Drought
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case DUST_AND_HAZE:
        return (
          <DustAndHaze
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case WILDFIRE:
        return (
          <Wildfire
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case FLOODS:
        return (
          <Floods
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case SEVERE_STORMS:
        return (
          <SevereStorms
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case VOLCANOES:
        return (
          <Volcanoes
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case WATER_COLOR:
        return (
          <WaterColor
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case LANDSLIDES:
        return (
          <Landslides
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case SEA_AND_LAKE_ICE:
        return (
          <SeaAndLakeIce
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case EARTHQUAKES:
        return (
          <Earthquakes
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case SNOW:
        return (
          <Snow
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case TEMPERATURE_EXTREMES:
        return (
          <TemperatureExtreme
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      case MANMADE:
        return (
          <Manmade
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      default:
        break;
    }
    return null;
  });

  const removeInfo = () => {
    // const info = document.querySelector(".location-info");
    // info.style.display = "none";
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAUArUrNRbUQAxFqrTaFMWgsYxWMBPFX08" }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={removeInfo}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 21.3265,
    lng: -172.8756,
  },
  zoom: 0,
};

export default Map;
