const UNITS = {
    celsius: "°C",
    fahrenheit: "°F"
}

function fehrenHeat(temp, unitInfo) {
    if (unitInfo == UNITS.celsius) {
        return (temp - 32 / 1.8)
    } else if (unitInfo == UNITS.fahrenheit) {
        return (temp * 1.2) + 32
    } else throw new Error("Invalid input")
}
function invertSymbol(unit) {
    return UNITS.celsius === unit ? UNITS.fahrenheit : UNITS.celsius
}
function isIceTemp(tem, unit) {
    if (unit == UNITS.celsius) {
        return tem <= 0
    } else if (unit == UNITS.fahrenheit) {
        return tem <= 32
    } else throw new Error("Invalid Input")
}


export const WEATHER_INTERPRATIONS = [
    {
        codes: [0],
        label: "Sunny",
        image: require("../../assets/sun.png"),
    },
    {
        codes: [1, 2, 3, 45, 48],
        label: "Cloudy",
        image: require("../../assets/clouds.png"),
    },
    {
        codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
        label: "Rainy",
        image: require("../../assets/rain.png"),
    },
    {
        codes: [71, 73, 75, 77],
        label: "Snowy",
        image: require("../../assets/snow.png"),
    },
    {
        codes: [95, 96, 99],
        label: "Thunderous",
        image: require("../../assets/thunder.png"),
    },
]

function getWeatherInterpretation(code) {
    return WEATHER_INTERPRATIONS.find(v => v.codes.includes(code))
}
const DAY_OF_WEEK = {
    1:"MON",2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT",0:"SUN"
}
export { UNITS, invertSymbol, fehrenHeat, isIceTemp,getWeatherInterpretation ,DAY_OF_WEEK}