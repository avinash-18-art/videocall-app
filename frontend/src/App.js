
import { Route ,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Room from './Components/Room';
import './App.css';

function App() {
  return (
    <div>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/room/:roomId" element={<Room/>}/>
   </Routes>
     
    </div>
  );
}

export default App;
