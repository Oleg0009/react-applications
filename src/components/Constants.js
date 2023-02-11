

export const API_KEY = "d589374222ba28bbe027a51fcd70571e"

export const getPositionByCoordinates_url = (lon, lat) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
