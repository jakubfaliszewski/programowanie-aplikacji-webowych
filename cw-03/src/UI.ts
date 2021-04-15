import './style.scss';

import { IForecastData, IWeatherData } from './interface';

import { DATA_KEY } from './apiCaller';
import { Main } from './index';

enum LIST_ELEMTNS {
    name = 'name',
    temp = 'temp',
    pressure = 'press',
    icon = 'icon'
}

export class UI {
    mainContext: Main;
    constructor(main: Main) {
        this.mainContext = main;
    }
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
    renderMainView(forecastData: IForecastData, activeCity: IWeatherData) {
        console.log('renderMain', forecastData);
        if(forecastData) {
            document.getElementById('mainTemp').innerHTML = `${forecastData.current.temp.toFixed(1)}°C`;
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = forecastData.current.weather[0].description;
        }
    }

    // aside UI
    removeCity(id: number) {
        const allCities: IWeatherData[] = JSON.parse(localStorage.getItem(DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities)
        }
    }

    populateListElement(element: HTMLElement, weatherData: IWeatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`) as HTMLImageElement;
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }

    renderWeatherElement(weatherData: IWeatherData, elementId: string) {
        const wrapper = document.getElementById('cityList');
        // main element
        const element = document.createElement('li');
        element.id = elementId;
        // other elements
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        // name
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        // temperature
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        // pressure
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        //icon 
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;

        // remove button
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));

        // activation
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });

        // appending
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);

        this.populateListElement(element, weatherData);
    }

    renderWeatherList(weatherData: IWeatherData[]) {
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId) as HTMLElement;
            // to avoid unnecessaary re-rendering of all list, just refresh new content
            if (element) this.populateListElement(element, data);
            else this.renderWeatherElement(data, elementId);

        });
    }
}