import { INote } from './interface';

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}

export class Note {
    constructor(note: INote, parent: HTMLElement) {
        console.log(note);
        this.render(note, parent)
    }

    render(note: INote, parent: HTMLElement) {
        const noteEl = document.createElement('div');
        noteEl.className = 'note';
        noteEl.id = `noteEl_${note.id}`;
        // title
        const noteElTitle = document.createElement('p');
        noteElTitle.className = 'note-title';
        noteElTitle.innerText = note.title;
        // content 
        const noteElContent = document.createElement('p');
        noteElContent.className = 'note-content';
        noteElContent.innerText = note.content;
        // appending
        noteEl.append(noteElTitle, noteElContent);

        parent.appendChild(noteEl);
    }
}