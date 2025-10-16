import React, { useState } from 'react';
import Folder from './Folder';
import { FolderType } from './Types';

function App() {
  const [folders, setFolders] = useState([]);

  const addFolder = () => {
    const name = prompt('Nombre de la carpeta');
    if (!name) return;
    const newFOlder = { id: Date.now().toString(), name, moodboards: [] };
    setFolders([...folders, newFolder]);
  };

  const updateFolder = (updateFolder) => {
    setFolders(folders.map(f => f.id === updateFolder.id ? updateFolder : f));
  };
  const deleteFolder = (id) => {
    setFolders(folders.filter(f => f.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Moodboards</h1>
        <button onClick={addFolder}>Crear carpeta</button>
      </header>
      <div className="folders-container">
        {folders.map(folder => (
          <Folder
            key={folder.id}
            updateFolder={updateFolder}
            deleteFolder={deleteFolder} />
        ))}
      </div>
    </div>
  );
}

export default App;
