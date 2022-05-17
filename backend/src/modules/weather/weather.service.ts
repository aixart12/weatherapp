import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { where } from 'sequelize/types';
// import { UPDATE } from 'sequelize/types/query-types';
import { WeatherScheme } from 'src/models/weather.model';

@Injectable()
export class WeatherService {
    constructor(private readonly httpService: HttpService){}

    async getWeather(cityName:string) :Promise<any> {
        const response:any = this.httpService.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=90554fadf5070ccde1f257df60d19a64`).pipe(
            map(async (response) => { response.data }),
            catchError((e) => {
              throw new HttpException(e.response.data, e.response.status);
            }),
          );

          const weatherdata = await WeatherScheme.findOne({where : {name:cityName}})
            if(weatherdata){
              return WeatherScheme.update({
                name : response?.name ,
                maxtemp : response?.main?.temp_max,
                mintemp : response?.main?.temp_min ,
                visibility:response?.visibility
  
  
              },{where : {name : cityName}})
            }
            return WeatherScheme.create( {
              name : response?.name,
              maxtemp : response?.main?.temp_max,
              mintemp: response?.main?.temp_min ,
              visibility: response?.visibility
            })
          
          

          
          
    }

















}
