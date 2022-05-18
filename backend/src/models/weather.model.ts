import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class WeatherScheme  extends Model {
    @Column
    name: string;
    @Column({
        type: DataType.STRING
    })
    maxtemp : number;
    @Column({
        type: DataType.FLOAT
    })
    mintemp: number;
    @Column({
        type: DataType.FLOAT
    })
    visibility:number;

}