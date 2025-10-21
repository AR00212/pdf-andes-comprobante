import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ComprobanteEgreso from './components/ComprobanteEgreso';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <PDFViewer 
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      >
        <ComprobanteEgreso />
      </PDFViewer>
      </div>
  );
}

export default App;