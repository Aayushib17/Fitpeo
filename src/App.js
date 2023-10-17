import './App.css';
// import { dataRef } from './Components/Firbase';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  // dataRef.ref.child("all").push(name);
  return (
    <div className="App">
     <Sidebar/>
     <Main/>      
    </div>
  );
}

export default App;
