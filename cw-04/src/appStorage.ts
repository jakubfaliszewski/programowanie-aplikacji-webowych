import { INote } from "./interface";

interface IAppStorage {
    saveToLocalStorage: (newNote: INote) => INote[],
    removeFromLocalStorage: (id: INote['id']) => INote[],
    getFromLocalStorage: () => INote[],
    getAllTagsFromStorage: () => string[],
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

    saveToLocalStorage = (newNote: INote) =>  {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const existingIndex = notes.findIndex(v => v.id === newNote.id);    
        if (existingIndex !== -1) notes[existingIndex] = newNote;
        else notes.push(newNote);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));
    
        return notes;
    }
    
    removeFromLocalStorage(id: INote['id']) {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[];
        notes.splice(notes.findIndex((v) => v.id === id), 1);
        localStorage.setItem('CW04_Notes', JSON.stringify(notes));
    
        return notes;
    }
    
    getFromLocalStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        
        return notes;
    }

    getAllTagsFromStorage() {
        const notes = JSON.parse(localStorage.getItem('CW04_Notes')) as INote[] ?? [];
        const tags = notes.flatMap((v) => v.tags);

        return [... new Set(tags)];
    }
}