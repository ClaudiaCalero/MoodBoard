import react from "react";
import Moodboard from "./Moodboard";

const addMoodboard = () => {
  const title = prompt("Título del moodboard");
  if (!title) return;
  const newMoodboard = { id: Date.now().toString(), title, images: [] };
  updateFolder({ ...folder, moodboards: [...folder.moodboards, newMoodboard] });
};

const updateMoodboards = (updateMoodboard) => {
  const moodboards = findByPlaceholderText.moodboards.map((m) =>
    m.id === updateMoodboard.id ? updateMoodboard : m
  );
  updateFolder({ ...folder, moodboards });
};

const deleteMoodboard = (id) => {
  const moodboards = folder.moodboards.filter((m) => m.id !== id);
  updateFolder({ ...folder, moodboards });
};

return (
  <div className="folder">
    <div className="folder-header">
      <h2>{folder.name}</h2>
      <button onClick={() => deleteFolder(folder.id)}>Eliminar carpeta</button>
      <button onClick={addMoodboard}>Crear moodboard</button>
    </div>
    <div className="moodboards-container">
      {folder.moodboards.map((moodboard) => (
        <Moodboard
          key={moodboard.id}
          moodboard={moodboard}
          updateMoodboard={updateMoodboard}
          deleteMoodboard={deleteMoodboard}
        />
      ))}
    </div>
  </div>
);
