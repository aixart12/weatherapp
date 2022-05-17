import { Column, Model, Table } from "sequelize-typescript";

@Table
export class WeatherScheme  extends Model {
    @Column
    name: string;
    @Column
    maxtemp : number;
    @Column
    mintemp: number;
    @Column
    visibility:number;

}