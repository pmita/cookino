import './App.css';
//ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//PAGES
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';
import Create from './pages/Create/Create';
import Search from './pages/Search/Search';
//COMPONENTS
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ThemeSelector />
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
