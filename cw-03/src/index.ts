import './style.scss';

import { ApiCaller } from './apiCaller';
import { IWeatherData } from './interface';
import { UI } from './UI';

class Main {
    apiCaller: ApiCaller;
    UI: UI;
    weatherData: IWeatherData[];
    activeCity = 0;
    constructor() {
        this.apiCaller = new ApiCaller();
        this.UI = new UI();
        this.weatherData = this.apiCaller.getData();
        console.log(this.weatherData);

        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
        this.UI.renderMainView(this.weatherData[this.activeCity]);
    }

    bindInputEvents() {
        const apiButton = document.getElementById('apiButton');
        const cityInput = document.getElementById('cityInput') as HTMLInputElement;
        apiButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code: IWeatherData['cod']) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                console.log(this.weatherData);
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
        });
    }

}


new Main();