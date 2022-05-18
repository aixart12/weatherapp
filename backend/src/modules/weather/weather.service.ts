import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { WeatherScheme } from 'src/models/weather.model';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService, @Inject('WEATHER_REPOSITRY') private readonly weatherRepositry: typeof WeatherScheme) { }

  async getWeather(cityName: string): Promise<any> {
    
    const response: any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=90554fadf5070ccde1f257df60d19a64`)

    const weatherdata: any = await this.weatherRepositry.findAll({ where: { name: response.data.name } })
    console.log("-------DATA_-------",weatherdata)
    if (weatherdata.length > 0 ) {
      await this.weatherRepositry.update({
        name: response.data?.name,
        maxtemp: +(response.data?.main?.temp_max),
        mintemp: +(response.data?.main?.temp_min),
        visibility: +(response.data?.visibility)

      }, { where: { name: cityName } })
    } else {
      await this.weatherRepositry.create({
        name: response.data?.name,
        maxtemp: +(response?.data.main?.temp_max),
        mintemp: +(response.data?.main?.temp_min),
        visibility: +(response.data?.visibility)
      })
    }

      return response.data;
  }


}
