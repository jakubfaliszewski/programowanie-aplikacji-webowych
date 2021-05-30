import './style.scss';

import { INote } from './interface';
import { UI } from './UI';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

export class Main {
    UI: UI;
    notes: INote[];
    constructor() {
        this.UI = new UI();
        this.UI.renderNotes();
    }


}


new Main();