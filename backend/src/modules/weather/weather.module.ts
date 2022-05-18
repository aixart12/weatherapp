import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WeatherScheme } from 'src/models/weather.model';
import { WeatherController } from './weather.controller';
import { weatherProvider } from './weather.providers';
import { WeatherService } from './weather.service';

@Module({
  imports: [SequelizeModule.forFeature([WeatherScheme]),HttpModule],
  providers: [WeatherService, ...weatherProvider],
  controllers: [WeatherController]
})
export class WeatherModule {}
