import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes if needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;