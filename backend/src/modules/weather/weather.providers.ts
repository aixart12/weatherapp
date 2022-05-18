import { WeatherScheme } from "src/models/weather.model";

export const weatherProvider =[{
    provide: 'WEATHER_REPOSITRY',
    useValue: WeatherScheme,
}]