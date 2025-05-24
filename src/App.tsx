import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Keep basename empty, let Vite handle base path */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App; 