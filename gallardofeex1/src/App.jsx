import './App.css';
import { useState } from 'react';
import CalculatorPage from './pages/CalculatorPage.jsx';
import { BookstorePage } from './pages/BookstorePage.jsx';
import BackToTopButton from './components/buttons/BackToTopButton.jsx';
import ScrollDownButton from './components/buttons/ScrolldownButton.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('bookstore');

  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div className="App">
      <BackToTopButton />
      <div className="menu">
        <button onClick={() => handlePageChange('bookstore')}>Bookstore</button>
        <button onClick={() => handlePageChange('calculator')}>Calculator</button>
      </div>
      {currentPage === 'bookstore' ? <BookstorePage /> : <CalculatorPage />}
      <ScrollDownButton />
    </div>
  );
}

export default App;
