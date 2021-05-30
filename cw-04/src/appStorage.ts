import { config, storageType } from './storageConfig';

import { AppNotifications } from "./notificationService";
import { INote } from "./interface";
import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

interface IAppStorage {
    saveToStorage: (newNote: INote) => Promise<INote[]>,
    removeFromStorage: (id: INote['id']) => Promise<INote[]>,
    getFromStorage: () => Promise<INote[]>,
    getAllTagsStorage: () => Promise<string[]>,
}

// Singleton app storage
export class AppLocalStorage implements IAppStorage {
    private static instance: IAppStorage;
    private constructor() { }

    public static getInstance(): IAppStorage {
        if (!AppLocalStorage.instance) {
            AppLocalStorage.instance = new AppLocalStorage();
        }

        return AppLocalStorage.instance;
    }

    async saveToStorage(newNote: INote) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const existingIndex = notes.findIndex(v => v.id === newNote.id);
        if (existingIndex !== -1) notes[existingIndex] = newNote;
        else notes.push(newNote);

        if (newNote.notification)
            AppNotifications.getInstance().addNotification(newNote);

        localStorage.setItem('CW04_Notes', JSON.stringify(notes));

        return Promise.resolve(notes);
    }

    async removeFromStorage(id: INote['id']) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[];
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));

        return Promise.resolve(notes);
        return notes;
    }

    async getFromStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        console.log(notes);
        return Promise.resolve(notes);
    }

    async getAllTagsStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const tags = notes.flatMap((v) => v.tags);

        return Promise.resolve([... new Set(tags)]);
    }
}

export class AppFirestorageStorage implements IAppStorage {
    private static instance: IAppStorage;
    db: firebase.firestore.Firestore;
    
    private constructor() { 
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = firebaseApp.firestore();
    }

    public static getInstance(): IAppStorage {
        if (!AppFirestorageStorage.instance) {
            AppFirestorageStorage.instance = new AppFirestorageStorage();
        }

        return AppFirestorageStorage.instance;
    }

    async saveToStorage(newNote: INote) {
        const res = await this.db.collection('notes').add({...newNote});
        return Promise.resolve([]);
    }

    async removeFromStorage(id: INote['id']) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[];
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));

        return Promise.resolve(notes);
    }

    async getFromStorage() {
        const res = await this.db.collection('notes').get().then(res => ({
            data: res.docs.map((res) => res.data())
        }));
        const data = res.data as INote[];
        return Promise.resolve(data);
    }

    async getAllTagsStorage() {
        const notes = await this.getFromStorage();
        const tags = notes.flatMap((v) => v.tags);

        return Promise.resolve(tags);
    }
}


export default AppFirestorageStorage;