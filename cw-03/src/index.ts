import './style.scss';

import { ApiCaller } from './apiCaller';
import { IWeatherData } from './interface';

class Main {
    apiCaller : ApiCaller;
    weatherData: IWeatherData[];
    constructor() {
        this.apiCaller =  new ApiCaller();
        this.weatherData = this.apiCaller.getData();
        console.log(this.weatherData);

        this.bindInputEvents();
    }

    bindInputEvents() {
        const apiButton = document.getElementById('apiButton');
        const cityInput = document.getElementById('cityInput') as HTMLInputElement;
        apiButton.addEventListener('click', (event) => {
            this.apiCaller.callData(cityInput.value).then((code: IWeatherData['cod']) => {
                if(Number(code) !==  200) {
                    this.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                console.log(this.weatherData);
            });
            cityInput.value = '';
        });
    }
    
    showApiError() {
        console.warn('city does not exist');
    }
}


new Main();