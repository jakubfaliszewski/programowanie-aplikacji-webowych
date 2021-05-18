import { INote } from "./interface";

interface IAppStorage {
    saveToLocalStorage: (newNote: INote) => Promise<INote[]>,
    removeFromLocalStorage: (id: INote['id']) => Promise<INote[]>,
    getFromLocalStorage: () => Promise<INote[]>,
    getAllTagsFromStorage: () => Promise<string[]>,
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

    async saveToLocalStorage(newNote: INote)  {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const existingIndex = notes.findIndex(v => v.id === newNote.id);    
        if (existingIndex !== -1) notes[existingIndex] = newNote;
        else notes.push(newNote);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));

        return Promise.resolve(notes);
    }
    
    async removeFromLocalStorage(id: INote['id']) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[];
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));
    
        return Promise.resolve(notes);
        return notes;
    }
    
    async getFromLocalStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        
        return Promise.resolve(notes);
    }

    async getAllTagsFromStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const tags = notes.flatMap((v) => v.tags);

        return Promise.resolve([... new Set(tags)]);
    }
}