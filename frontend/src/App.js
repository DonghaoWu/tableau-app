import './App.css';
import SideNav from './components/SideNav/SideNav';
import MainContent from './components/Maincontent/MainContent';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <SideNav />
          <MainContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
