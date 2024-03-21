import './App.css';
import Header from './components/Header';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header/>
      <div className="w-full flex flex-col justify-center items-center">
        <VideoDetails/>
      </div>
    </div>
  );
}

export default App;
