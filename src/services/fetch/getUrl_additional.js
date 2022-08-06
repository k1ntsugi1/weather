const getUrl_additional = (latitude, longitude) => {
    const additionalUrl = `https://api.openweathermap.org/geo/1.0/reverse?`;
    const lat = `lat=${latitude}&`;
    const lon = `lon=${longitude}&`
    const limit = `limit=${5}&`;
    const appid = 'appid=45d767d1bc549e5a3ade84a6a2d80e23';
    return additionalUrl + lat + lon + limit + appid;
}

export default getUrl_additional;