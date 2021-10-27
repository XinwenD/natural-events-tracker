import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
