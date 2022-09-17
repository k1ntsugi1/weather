const getUrlMain = (currentType: string, currentPoint: string, currentLang: string): string => {
    const mainUrl = `https://api.openweathermap.org/data/2.5/${currentType}?`;
    const point = `q=${currentPoint}`
    const lang=`&lang=${currentLang}`;
    const units = currentLang === 'ru' ? `&units=metric` : '';
    const appid = '&appid=45d767d1bc549e5a3ade84a6a2d80e23';
    return mainUrl + point + lang + units + appid;
}

export default getUrlMain;