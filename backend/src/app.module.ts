import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeScopeError } from 'sequelize/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './modules/weather/weather.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host:'localhost',
    port:5425,
    username:'postgres',
    password:'postgres',
    database:'weather',
    autoLoadModels: true,
    synchronize: true
  }),
    WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
