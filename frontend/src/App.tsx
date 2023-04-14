import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import EnterDetails from './pages/EnterDetails/EnterDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/enterDetails' element={<EnterDetails />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
