import './style.scss';

import { AppLocalStorage } from './appStorage';
import { INote } from './interface';
import { UI } from './UI';

export class Main {
    UI: UI;
    notes: INote[];
    constructor() {
        document.addEventListener('DOMContentLoaded', function (event) {
            //the event occurred
            this.UI = new UI(this);
            this.notes = AppLocalStorage.getInstance().getFromLocalStorage();
            this.UI.renderNotes(this.notes);
            this.UI.renderToolbarTags();
        })
    }

}


new Main();