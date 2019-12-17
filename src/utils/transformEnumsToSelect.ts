export interface arrayToSelect {
  id: number;
  name: string;
}
interface IProps {
  [key: string]: number | string;
}

export const eumToObject = (enumToTransform: IProps): arrayToSelect[] => {
  const generate = Object.keys(enumToTransform)
    .filter((el: string) => !isNaN(Number(el)))
    .map((el: string) => ({
      id: Number(el) + 1,
      name: enumToTransform[el] as string
    }));
  return generate;
};
