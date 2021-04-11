import { IWeatherData } from './interface';

export const DATA_KEY = "weather_data"
const API_KEY = "cbeeb4917456a9dc5bef570967628521";

export class ApiCaller {
    constructor() {
        this.callData();
    }

    async callData(city?: string) {
        if(city) {
            const weather = await this.getWeatherData(city);
            if(weather && weather.cod === 200) {
                this.saveData(weather);
            }

            return weather.cod;
        }
    }

    async getWeatherData(city: string): Promise<IWeatherData> {
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const weatherResp = await fetch(apiURL);
        const weatherData: IWeatherData = await weatherResp.json();

        return weatherData;
    }

    saveData(data: IWeatherData) {
        const currentData = this.getData();
        const isAlreadySaved = currentData.find((val) => val.id === data.id);
        if(isAlreadySaved) {
            // data already saved
            // no need to setItem again
            return;
        }

        localStorage.setItem(DATA_KEY, JSON.stringify([...currentData, data]));
    }

    getData(): IWeatherData[] {
        const data = localStorage.getItem(DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
