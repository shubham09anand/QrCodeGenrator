import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import "../App.css";
import {Link} from 'react-router-dom';

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
       <div className="text-wxl font-semibold mt-5 space-y-3 w-full md:w-1/2 mx-auto flex flex-col place-content-center items-center">
         <h1 className='text-2xl font-semibold'>QR Code Generator</h1>
         <input
           type="text"
           value={data}
           onChange={(e) => setData(e.target.value)}
           placeholder="Enter data"
           className="text-gray-600 border-2 w-4/5 md:w-1/2 p-1 border-gray-500 rounded-sm outline-none focus:bg-gray-100"
         />
         {data ? (
           <div>
             <div className='text-xl font-semibold my-2 text-center'>Generated QR Code:</div>
             <div ref={qrRef}>
               <QRCode value={data} size={256} />
             </div>
             <div onClick={downloadQRCode} className="active:opacity-70 cursor-pointer text-white text-center bg-blue-600 mt-5 p-2 rounded-sm">
               Download QR Code as PNG
             </div>
           </div>
         ):
          <div className='font-extralight h-40 w-4/5 md:w-1/2 text-center pt-5 bg-gray-200'>
            Your QR Genrate Here. Enter the text in text Box first.  <br /> OR <br />
            <Link to="/" className='text-blue-400'> click here to gerate more intractive QR code</Link>
          </div>
         }
       </div>
     )
}

export default QrCode