import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "./_maps.scss";
const mapStyles = {
  width: "200px",
  height: "200px"
};
const GoogleMap = ({ google }: any) => {
  console.log("gooogle map", google);

  const handleChangeMarker = (e: any, b: any, c: any) => {
    console.log("e", e);
    console.log("b", b);
    console.log("c", c);

    const { latLng } = c;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat);
    console.log(lng);
  };
  return (
    <div className="mapaKurwa">
      <Map
        // style={mapStyles}
        google={google}
        zoom={14}
        initialCenter={{ lat: 49.999780081874846, lng: 18.884742145538326 }}
      >
        <Marker
          label="siema"
          position={{ lat: 49.999780081874846, lng: 18.884742145538326 }}
          draggable={true}
          onDragend={handleChangeMarker}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"
})(GoogleMap);
