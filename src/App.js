import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Sources from './Pages/Sources';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <>
     <Router>
        <Header />
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="sources" element={<Sources />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
