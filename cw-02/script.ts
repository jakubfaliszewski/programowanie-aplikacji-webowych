interface ISound {
    key: string,
    time: number
}
interface ISoundEl {
    element: HTMLAudioElement,
    key: string
}

class Drumkit {
    sounds: Array<HTMLAudioElement> = [];
    playBtn: HTMLButtonElement = document.querySelector('#playCh1');
    constructor() {
        document.querySelectorAll('audio').forEach((el) => {
            this.sounds.push(el);
        })
        console.log(this.sounds);
        new DrumkitUI(this.sounds);
    }
}

class DrumkitUI {
    statsSection = document.getElementById('UI-section');
    channels: ISound[] = [];
    sounds: Array<ISoundEl> = [];
    soundButtons: Array<HTMLButtonElement> = [];
    constructor(sounds: Array<HTMLAudioElement>) {
        // on init map sound to class variable and perpare event listener
        this.sounds = sounds.map((element) => ({
            element,
            key: element.dataset.key
        }));
        document.body.addEventListener('keypress', (ev) => this.onKeyDown(ev));
        this.renderButtons(sounds);
    }

    renderButtons(sounds: HTMLAudioElement[]) {
        const container = document.getElementById('buttons');
        // create buttons in DOM
        sounds.forEach(element => {
            const soundBtn = document.createElement('button');
            soundBtn.innerText = `${element.dataset.key}`;
            // assign ket to button, to recognize which is which
            soundBtn.dataset.soundKey = element.dataset.key;
            // here we need seperate event for each button
            soundBtn.addEventListener('click', (ev) => this.onClick(element.dataset.key, ev));
            // save button in class, just like sounds elements
            this.soundButtons.push(soundBtn);
            container.appendChild(soundBtn);
        });
    }

    onClick(key: string, ev: MouseEvent) {
        const time = ev.timeStamp;
        this.channels.push({
            key: key,
            time: time
        });
        this.playSound(key);
    }

    onKeyDown(ev: KeyboardEvent) {
        const key = ev.key;
        const time = ev.timeStamp;
        this.channels.push({
            key: key,
            time: time
        });
        console.log(this.channels);
        this.playSound(key);
    }

    playSound(key: string) {
        const btn = this.soundButtons.find((el) => el.dataset.soundKey === key);
        const element = this.sounds.find((v) => v.key === key).element;
        element.currentTime = 0;
        element.play();
        this.giveAnimation(btn);
    }

    giveAnimation(btn: HTMLButtonElement) {
        const animSpan = document.createElement('span');
        btn.classList.add("playing");
        btn.appendChild(animSpan);
        setTimeout(() => {
            btn.classList.remove("playing");
        }, 100);
        animSpan.addEventListener('animationend', () => {
            animSpan.remove();
        })
    }

    onPlayCh1() {
        let prevTime = 0;
        this.channels.forEach((sound: ISound) => {
            const time = sound.time - prevTime;
            setTimeout(() => {
                this.playSound(sound.key);
            }, time);
        })
    }
}

const drumkit = new Drumkit();