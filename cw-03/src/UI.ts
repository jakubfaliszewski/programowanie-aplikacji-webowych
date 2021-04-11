import './style.scss';

import { DATA_KEY } from './apiCaller';
import { IWeatherData } from './interface';

export class UI {
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        // add class that animates the toast
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            // remove `animationend` event after execution for performance reasons
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }


    // main UI
    renderMainView(weatherData: IWeatherData) {
        document.getElementById('mainTemp').innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        document.getElementById('mainCity').innerHTML = weatherData.name;
    }

    // aside UI
    removeCity(id: number) {
        const allCities: IWeatherData[] = JSON.parse(localStorage.getItem(DATA_KEY));
        if (allCities && id) {
            console.log(allCities);
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities)
        }
    }

    renderWeatherElement(weatherData: IWeatherData) {
        const element = document.createElement('li');
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        elementBtn.className = "city-list-item";
        // name
        const nameEl = document.createElement('p');
        nameEl.innerHTML = weatherData.name;
        elementBtnContainer.appendChild(nameEl);
        // temperature
        const tempEl = document.createElement('span');
        tempEl.innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        elementBtnContainer.appendChild(tempEl);
        // pressure
        const pressEl = document.createElement('span');
        pressEl.innerHTML = `${weatherData.main.pressure} hPA`;
        elementBtnContainer.appendChild(pressEl);

        // remove button
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));
        
        // activation
        elementBtn.addEventListener('click', () => {
            this.renderMainView(weatherData);
        });

        // appending
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);

        return element;
    }

    renderWeatherList(weatherData: IWeatherData[]) {
        const wrapper = document.getElementById('cityList');

        // clear list before re-rendering
        wrapper.innerHTML = null;
        weatherData.forEach((v) => {
            wrapper.appendChild(this.renderWeatherElement(v));
        });
    }
}