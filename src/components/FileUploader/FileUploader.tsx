import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import EXIF from "exif-js";
import { convertToDecimal } from "../../utils/convertGPSToDecimal";
import { GPSLocation } from "../../interfaces";
import { exifResolver } from "./exifResolver";

interface IProps {
  takeGPSPosition: GPSLocation;
}
export const FileUploader = ({ takeGPSPosition }: IProps) => {
  const onDrop = (acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        const exifData = EXIF.readFromBinaryFile(binaryStr);
        if (exifData) {
          const lngLat = exifResolver(exifData);
          const GPSLatitudeConverted = convertToDecimal(lngLat.GPSLatitude);
          const GPSLongitudeConverted = convertToDecimal(lngLat.GPSLongitude);
          takeGPSPosition(GPSLongitudeConverted, GPSLatitudeConverted);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p style={{ backgroundColor: "lightgrey" }}>
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
    </div>
  );
};
