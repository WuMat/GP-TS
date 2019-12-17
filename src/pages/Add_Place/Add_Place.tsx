import React, { useState } from "react";
import { ValueType } from "react-select/src/types";

import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import { placesPL } from "../../Enums/places";
import { ProvincesPL } from "../../Enums/provinces";
import { eumToObject, arrayToSelect } from "../../utils/transformEnumsToSelect";
import { FileUploader } from "../../components/FileUploader/FileUploader";
import Map from "../../components/GoogleMap/GoogleMap";
import { GPSLocation } from "../../interfaces";
import "./_addPlace.scss";

const Add_Place = () => {
  const [GPSPosition, setGPSPosition] = useState({});
  const placesFromEnum: arrayToSelect[] = eumToObject(placesPL);
  const provincesFromEnum: arrayToSelect[] = eumToObject(ProvincesPL);

  const handleChange = (el: ValueType<arrayToSelect>) => {
    console.log("object", el);
  };

  const handleGPSPosition: GPSLocation = (lng, lat) => {
    console.log("lng", lng);
    console.log("lat", lat);
  };
  return (
    <div className="wrapper">
      <div className="addPlace">
        <div className="addPlace__basicInfo">
          <FileUploader takeGPSPosition={handleGPSPosition} />
          <Map />
          <Input
            type="text"
            name="location_name"
            description="Nazwa lokalizacji"
            placeholder="Nazwa lokalizacji"
            width="wide"
          />
          <Select
            options={placesFromEnum}
            onChange={handleChange}
            placeholder="Kategoria"
          />
        </div>
        <div className="addPlace__details">
          <Input
            type="text"
            name="city"
            description="Miasto"
            placeholder="Miasto"
            width="small"
          />
          <Input
            type="text"
            name="postal_code"
            description="Kod pocztowy"
            placeholder="Kod pocztowy"
            width="small"
          />
          <Select
            options={provincesFromEnum}
            onChange={handleChange}
            placeholder="Województwo"
          />

          <Input
            type="text"
            name="street"
            description="ulica"
            placeholder="ulica"
            width="small"
          />
          <Input
            type="text"
            name="street_number"
            description="nr ulicy"
            placeholder="nr ulicy"
            width="small"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Add_Place;
