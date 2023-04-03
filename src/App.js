import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={160}
          messeges={200}
          shares={300}
          name="Paulo"
          description="GATO rack"
          music="Musica Epica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
          />

      </div>
    </div>
  );
}

export default App;
