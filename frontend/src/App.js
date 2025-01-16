
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/:id' element={<Update />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
