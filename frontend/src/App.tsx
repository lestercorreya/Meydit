import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/details' element={<Details />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
