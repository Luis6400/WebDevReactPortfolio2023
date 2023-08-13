import {React, useState} from 'react';
import './App.css';
import Home from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Nav from './components/nav';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) =>{
    
    setCurrentPage(page);
  } 
  return (
    <div>

      <Nav currentpage={currentPage} handlePageChange={handlePageChange}/>
      {currentPage === 'home' && <Home/>}
      {currentPage === 'about' && <About/>}
      {currentPage === 'projects' && <Projects/>}

    </div>
  );
}

export default App;
