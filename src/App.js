import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import FieldsPage from './pages/fieldsPage';
import Navbar from './components/navbar';
import AuthComponent from './auth/AuthComponent';
import Modal from './auth/AuthModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

    function showModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }
  return (
    <Router>
      <div >
        <Navbar showModal={showModal}/>
        <Modal isOpen={modalOpen} onClose={closeModal} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/field" element={<FieldsPage />} />
          <Route path="/login" element={<AuthComponent />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;