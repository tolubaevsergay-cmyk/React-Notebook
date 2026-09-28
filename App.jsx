import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import styles from './components/App.module.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([])
  const [value, setValue] = useState('')
  const [activeId, setActiveId] = useState(null)
  function handleNote(id){
    setActiveId(id)
    notes.map(note =>{
      if(note.id === id){
        setValue(note.text)
        setActiveId(id)
      }
    })
  }
  function handleClick(){
    if (activeId !== null) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === activeId ? { ...note, text: value } : note
      )
    );
    setActiveId(null)
    setValue('')
    return;
  }
    if(!value.trim()) return
    if(activeId === null){
      setNotes([...notes, {id: Date.now(), title: `Запись ${notes.length + 1}`, text: value}])
      setValue('')
    }
  }
  return (
    <div className={styles.notebook}>
      <aside className={styles.notebook__sidebar}>
        <button className={styles.notebook__new_btn} onClick={handleClick}>{activeId === null ? '+ Новая запись' : 'Сохранить'}</button>
        <ul className={styles.notebook__list}>
          <Note notes={notes} handleNote={handleNote}/>
        </ul>
      </aside>

      <main className={styles.notebook__editor}>
        <textarea
          value={value}
          className={styles.notebook__textarea}
          placeholder="Начните печатать..."
          onChange={(e)=> setValue(e.target.value)}
        />
      </main>
    </div>
  );
}

export default App;