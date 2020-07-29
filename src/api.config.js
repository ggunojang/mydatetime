/**
 * 날씨 API 연동
 */
const base_url = '//:api.openweathermap.org/data/2.5/weather';
const appid = 'f2710455a3f27e129590730cf8f1859f';
const lat = '';
const lon = '';

export const weather_url = `${base_url}?lat=${lat}&lon=${lon}&appid=${appid}`;
