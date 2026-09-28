import { useState } from 'react'
import styles from './components/App.module.css'

function Note({notes, handleNote}){
    return notes.map(note=>{
        return <li className={styles.notebook__item}
        key={note.id}
        onClick={()=> handleNote(note.id)}
        >{note.title}
        <h4>{note.text}</h4>
        </li>
    })
}
export default Note