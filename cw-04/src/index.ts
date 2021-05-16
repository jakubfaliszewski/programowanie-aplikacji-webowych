import './style.scss';

import { INote } from './interface';
import { UI } from './UI';

const ACTIVE_CITY_KEY = "active_city"

export class Main {
    UI: UI;
    notes: INote[];
    constructor() {
        this.UI = new UI(this);
        // this.bindInputEvents();
        // mock-up
        this.notes = [{
            id: 'x',
            date: 12,
            title: 'note title',
            content: 'content',
            pinned: false,
            color: '#ddd',
            tags: []
        }]
        this.UI.renderNotes(this.notes);
    }

    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton') as HTMLButtonElement;
        const cityInput = document.getElementById('cityInput') as HTMLInputElement;
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // this.apiCaller.callData(cityInput.value).then((code: IWeatherData['cod']) => {
            //     if (Number(code) !== 200) {
            //         this.UI.showApiError();
            //     }
            //     this.weatherData = this.apiCaller.getData();
            //     this.UI.renderWeatherList(this.weatherData);
            // });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if ((event.target as HTMLInputElement).value.length > 0) cityButton.disabled = false;
            else cityButton.disabled = true;
        });
    }

}


new Main();