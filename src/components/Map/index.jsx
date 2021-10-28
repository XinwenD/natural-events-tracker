import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker";
import LocationInfo from "../LocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            return setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAUArUrNRbUQAxFqrTaFMWgsYxWMBPFX08" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 43.3265,
    lng: -122.8765,
  },
  zoom: 6,
};

export default Map;
