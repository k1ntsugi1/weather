const parserDataGeoposition = ([data], currentLang: string) => {
  console.log(data, 'response');
  const { local_names } = data;
  return local_names[currentLang];
};

export default parserDataGeoposition;
