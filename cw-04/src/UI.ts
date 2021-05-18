import { AppLocalStorage } from './appStorage';
import { INote } from './interface';
import { Main } from './index';
import { Modal } from './modal';
import { Note } from './note';

// aka Notes
export class UI {
    activeTag: string;
    constructor(main: Main) {
        this.activeTag = null;
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('add-note').addEventListener('click', (e) => {
            new Modal(null, this);
        })
    }

    renderToolbarTags() {
        const tags = AppLocalStorage.getInstance().getAllTagsFromStorage();
        const parentEl = document.getElementById('toolbarTags');
        console.log(parentEl.children);
        while (parentEl.children.length > 1) {
            parentEl.removeChild(parentEl.lastChild);
        }
        tags.forEach((v) => {
            const btn = document.createElement('button');
            btn.className = 'toolbar-button';
            btn.innerText = v;
            parentEl.appendChild(btn);
        });

        Array.from(parentEl.children).forEach((v: HTMLButtonElement, i) => {
            v.addEventListener('click', (e) => {
                e.preventDefault();

                this.setActiveTag(v, i);
            })
        })
    }

    setActiveTag(el: HTMLButtonElement, index: number) {
        // dummy way to get `All` btn
        if (index === 0) this.activeTag = null;
        else this.activeTag = el.innerText;
        
        const parentEl = document.getElementById('toolbarTags');
        Array.from(parentEl.children).forEach((v: HTMLButtonElement, i) => {
           v.classList.remove('toolbar-button--active');
        })
        el.classList.add('toolbar-button--active');

        this.renderNotes(AppLocalStorage.getInstance().getFromLocalStorage());
    }

    renderNotes(notes: INote[], force: boolean = false) {
        const notesElP = document.getElementById('notes-pinned');
        const notesEl = document.getElementById('notes-other');
        notesEl.innerText = null; notesElP.innerText = null;

        notes
            .filter((v) => this.activeTag !== null ? v.tags.includes(this.activeTag) : true)
            .forEach((note) => {
                new Note(note, note.pinned
                    ? notesElP
                    : notesEl, this);
            });
    }
}