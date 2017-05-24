export class WeatherItem{
    constructor(public city: string, public minTemperature: number, public maxTemperature: number,
                public description: string, public date: any, public humidity: number, public pressure: number
                ){}
}
