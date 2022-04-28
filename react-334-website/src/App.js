import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <h1>
        334 Prescription
      </h1>
      <Sidebar></Sidebar>
      <Routes>
        <Route path ='/' exact />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
