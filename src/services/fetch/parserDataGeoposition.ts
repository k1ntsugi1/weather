
type LocalNames =  {
    [key: string]: string
}

type Geoposition = {
  [key: string]: string | LocalNames,
  "local_names": LocalNames,
}

const parserDataGeoposition = ([data]: Geoposition[], currentLang: string): string => {
  const { local_names } = data;
  return local_names[currentLang];
};

export default parserDataGeoposition;
