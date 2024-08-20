import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import "../App.css";
import { Link } from 'react-router-dom';
import back from '../Assets/back.jpg'

const QrCode = () => {
  const [data, setData] = useState('');
  const qrRef = useRef();

  const downloadQRCode = () => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();

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
    downloadLink.download = `qr_code_${currentTime}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }} className="text-wxl font-semibold space-y-3 w-full md:w-1/2 mx-auto flex flex-col place-content-center items-center">
      <div className='h-screen w-full flex flex-col items-center'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-qr-code-scan size-40 absolute right-10 top-40 opacity-50 scale-[10%] md:scale-50 lg:scale-90" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
            <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
            <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
            <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
            <path d="M12 9h2V8h-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#52b1dd" className="bi bi-qr-code-scan size-40 absolute left-10 top-80 opacity-80 scale-[20%] md:scale-50 lg:scale-90" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
            <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
            <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
            <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
            <path d="M12 9h2V8h-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-qr-code-scan size-16 absolute left-5 top-28 opacity-70 scale-[50%] md:scale-50 lg:scale-90" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
            <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
            <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
            <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
            <path d="M12 9h2V8h-2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-qr-code-scan size-40 absolute bottom-10 opacity-50 scale-[80%]" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
            <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
            <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
            <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
            <path d="M12 9h2V8h-2z" />
          </svg>

        </div>
        <div className='text-4xl font-bold pt-12 font-serif'>QR Code Generator</div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="This text will become QR code"
          className="w-4/5 md:w-1/3 p-1 mt-10 border-gray-800 focus:border-gray-900 border-2 rounded-sm outline-none focus:bg-gray-100 placeholder:text-gray-500"
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
        ) :
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-qr-code size-40 mt-10" viewBox="0 0 16 16">
            <path d="M2 2h2v2H2z" />
            <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
            <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
            <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z" />
            <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
          </svg>
        }

        <div className='font-extralight h-40 w-4/5 md:w-1/2 text-center pt-5 '>
          {data === "" && (<div>Your QR Genrate Here. Enter the text in text Box first.  <br /> OR <br /></div>)}

          <Link to="/" className='text-blue-800'> click here to gerate more intractive QR code</Link>
        </div>
      </div>
    </div>
  )
}

export default QrCode