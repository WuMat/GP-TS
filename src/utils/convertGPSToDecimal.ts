interface IProps {
  degrees: number;
  minutes: number;
  seconds: number;
  direction: string;
}

export const convertToDecimal = (data: IProps): number => {
  const dd = data.degrees + data.minutes / 60 + data.seconds / (60 * 60);

  if (data.direction === "S" || data.direction === "W") {
    return dd * -1;
  } // Don't do anything for N or E
  return dd;
};
