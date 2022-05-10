import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import SideBar from './SideBar';
import Intro from './Intro';
import ServerMonitoring from './ServerMonitoring';

function App() {
  return (
    <HashRouter>
      <div>
        <div className='grid-container'>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route path="/server-monitoring" element={<ServerMonitoring />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;