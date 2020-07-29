import axios from "axios";

const base_url = 'http://api.openweathermap.org/data/2.5/weather';
const appid = 'f2710455a3f27e129590730cf8f1859f';

export const getData = async (location) => {
    const weather_url = `${base_url}?lat=${location.latitude}&lon=${location.longitude}&appid=${appid}&units=metric&lang=kr`;
    const data = await axios.get(`${weather_url}`);
    return data;
};