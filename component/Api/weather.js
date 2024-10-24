import axios from "axios";

export class MetoApi {

    static async fetchWeatherByCoords(coord) {
        const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coord.latitude}&longitude=${coord.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`)
        return data;
    }
    static async fetchCityByCoords(coord) {
        const { data } = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${coord.latitude}&lon=${coord.longitude}`)
        const {features} = data;
        return features[0].properties?.address?.suburb;
    }
    static async fetchLatLongByCity(city){
        const { data } = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        console.log(data)
        return data.results[0]
    }
} 