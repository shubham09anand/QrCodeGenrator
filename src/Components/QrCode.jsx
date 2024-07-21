import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

const QrCode = () => {
     const [data, setData] = useState('');
     const qrRef = useRef();
   
     const downloadQRCode = () => {
       const canvas = qrRef.current.querySelector('canvas');
       const canvasWithPadding = document.createElement('canvas');
       const context = canvasWithPadding.getContext('2d');
       const padding = 20;
       const size = canvas.width + padding * 2;
   
       canvasWithPadding.width = size;
       canvasWithPadding.height = size;
       context.fillStyle = '#fff'; // Background color
       context.fillRect(0, 0, size, size);
       context.drawImage(canvas, padding, padding);
   
       const pngUrl = canvasWithPadding
         .toDataURL('image/png')
         .replace('image/png', 'image/octet-stream');
       const downloadLink = document.createElement('a');
       downloadLink.href = pngUrl;
       downloadLink.download = 'qr-code.png';
       document.body.appendChild(downloadLink);
       downloadLink.click();
       document.body.removeChild(downloadLink);
     };
   
     return (
       <div className="container">
         <h1>QR Code Generator</h1>
         <input
           type="text"
           value={data}
           onChange={(e) => setData(e.target.value)}
           placeholder="Enter data"
           className="input"
         />
         {data && (
           <div>
             <h2>Generated QR Code:</h2>
             <div ref={qrRef}>
               <QRCode value={data} size={256} />
             </div>
             <button onClick={downloadQRCode} className="download-button">
               Download QR Code as PNG
             </button>
           </div>
         )}
       </div>
     )
}

export default QrCode