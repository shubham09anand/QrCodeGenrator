import './App.css';
import { Route, Routes } from 'react-router-dom';
import Interface from './Components/Interface';
import QrCode from './Components/QrCode';

function App() {
  return (
    <Routes>
      <Route path="/NormalQRCode" element={<QrCode/>} />
      <Route path="/" element={<Interface/>} />
    </Routes >
  );
}

export default App;
