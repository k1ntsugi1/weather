const parserData_geoposition = ([data], currentLang) => {
    console.log(data, 'response');
    const { local_names } = data;
    return local_names[currentLang]
}

export default parserData_geoposition;