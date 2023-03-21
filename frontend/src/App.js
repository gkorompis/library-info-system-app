import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Activity from './pages/Activity';
import Database from './pages/Database';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/database" element={<Database/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
