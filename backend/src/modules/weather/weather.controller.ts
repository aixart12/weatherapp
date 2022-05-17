import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService){}

    @Post()
    getWeather(@Body() cityName: {cityName: string} ) {
        return this.weatherService.getWeather(cityName.cityName);
    }
}
