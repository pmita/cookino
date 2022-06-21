import './App.css';
//ROUTER
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//PAGES
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';
import Create from './pages/Create/Create';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
