export const exifResolver = (exifData: any) => {
  const GPSLatitude = {
    degrees: Number(
      exifData.GPSLatitude[0].numerator / exifData.GPSLatitude[0].denominator
    ),
    minutes: Number(
      exifData.GPSLatitude[1].numerator / exifData.GPSLatitude[1].denominator
    ),
    seconds: Number(
      exifData.GPSLatitude[2].numerator / exifData.GPSLatitude[2].denominator
    ),
    direction: exifData.GPSLatitudeRef
  };
  const GPSLongitude = {
    degrees: Number(
      exifData.GPSLongitude[0].numerator / exifData.GPSLongitude[0].denominator
    ),
    minutes: Number(
      exifData.GPSLongitude[1].numerator / exifData.GPSLongitude[1].denominator
    ),
    seconds: Number(
      exifData.GPSLongitude[2].numerator / exifData.GPSLongitude[2].denominator
    ),
    direction: exifData.GPSLongitudeRef
  };
  return { GPSLatitude, GPSLongitude };
};
