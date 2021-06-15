import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((notes) => notes.id !== idToDelete));
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
