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
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        const db = firebaseApp.firestore();
        const note = {
            title: 'xdnd note',
            content: 'asdsaasd'
        };
        // addNote(note);
        // removeNote('8AXYdTyFpmGzEY6eL11K');
        // updateNote(note, 'B9bMNNAI7EjzSAYshdgP');
        // getNotes();
        async function addNote(note: any) {
            const res = await db.collection('notes').add(note);
        }

        async function removeNote(id: string) {
            const res = await db.collection('notes').doc(id).delete();
        }

        async function updateNote(note: any, id: string) {
            const res = await db.collection('notes').doc(id).update(note);
        }

        async function getNote(id: string) {
            const res = await db.collection('notes').doc(id).get().then(res => ({
                id: res.id,
                data: res.data()
            }));
            console.log(res);
        } 

        async function getNotes() {
            const res = await db.collection('notes').get().then(res => ({
                data: res.docs.map((res) => res.data())
            }));
            console.log(res);
        } 
    }


}


new Main();