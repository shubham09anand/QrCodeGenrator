import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import logo from "../Assets/logoSVG.svg";
import { Link } from 'react-router-dom';

const Interface = () => {
     const image = logo;
     const padding = '20';
     const [dimension, setDimension] = useState('500');
     const [dotOption, setDotOption] = useState('rounded');
     const [color, setColor] = useState('#000000');
     const [backgroundColor, setBackgroundColor] = useState('#ffffff');
     const [data, setData] = useState('Enter the text/url/info');
     const [qrCodeUrl, setQrCodeUrl] = useState('');
     const canvasRef = useRef(null);

     const now = new Date();
     const currentTime = now.toLocaleTimeString();

     const handleGenerateQRCode = () => {

          if (!data.trim()) {
               return;
          }

          if (dimension < 300 || dimension > 600) {
               setDimension(600)
          }

          const qrCode = new QRCodeStyling({
               width: parseInt(dimension, 10),
               height: parseInt(dimension, 10),
               type: 'svg',
               data,
               image,
               dotsOptions: {
                    color,
                    type: dotOption
               },
               backgroundOptions: {
                    color: backgroundColor
               },
               imageOptions: {
                    crossOrigin: 'anonymous',
                    margin: 10,
               }
          });

          qrCode.getRawData('svg').then((svg) => {
               const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
               const url = URL.createObjectURL(svgBlob);
               setQrCodeUrl(url);

               const canvas = canvasRef.current;
               if (!canvas) {
                    return;
               }
               const ctx = canvas.getContext('2d');
               const img = new Image();
               img.src = url;
               img.onload = () => {
                    const paddedWidth = parseInt(dimension, 10) + parseInt(padding, 10) * 2;
                    const paddedHeight = parseInt(dimension, 10) + parseInt(padding, 10) * 2;
                    canvas.width = paddedWidth;
                    canvas.height = paddedHeight;
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, paddedWidth, paddedHeight);
                    ctx.drawImage(img, parseInt(padding, 10), parseInt(padding, 10), parseInt(dimension, 10), parseInt(dimension, 10));
               };
          });

     };

     useEffect(() => {
          handleGenerateQRCode();
     }, [dimension, dotOption, color, backgroundColor, data, image, padding]);

     const handleDownload = () => {
          if (dimension < 50 || dimension > 2500) {
               setDimension(600);
               return;
          }
          if (!data.trim()) {
               setData("Enter the text/url/info");
               return;
          }
          const canvas = canvasRef.current;
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `qr_code_${currentTime}.png`;
          link.click();
     };

     return (
          <div className="min-h-screen w-screen content-center justify-center lg:p-5">
               <div className="-translate-y-20 md:translate-y-0 flex place-content-center items-center flex-col-reverse p-1 lg:space-x lg:flex-row shadow-md w-full lg:w-3/4 mx-auto rounded-3xl">
                    <div className="-translate-y-20 md:translate-y-0 flex place-content-center items-center justify-center rounded-l-md mt-5 lg:w-1/2">
                         <div className="w-full sm:shadowBox border-2 p-5 rounded-md">
                              <Link to='/NormalQRCode' className='text-blue-500'>Genrate Normal QR Code</Link>
                              <div className="text-black font-semibold text-3xl">QR Code Generator</div>
                              <form className="mt-4">
                                   <div className="mb-3">
                                        <label className="mb-2 block">Dimension</label>
                                        <input
                                             type="number"
                                             placeholder="Enter the dimension (size x size)"
                                             value={dimension}
                                             onChange={(e) => setDimension(e.target.value)}
                                             className="block w-full rounded-md border border-gray-300 focus:outline-none py-1 px-1.5 text-gray-500"
                                        />
                                   </div>

                                   <div className="mb-2 block">Dot Options</div>
                                   <div className="mb-3 flex flex-wrap">
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-rounded"
                                                  type="radio"
                                                  value="rounded"
                                                  checked={dotOption === 'rounded'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-rounded" className="ms-2 text-sm font-medium text-gray-900">Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-dots"
                                                  type="radio"
                                                  value="dots"
                                                  checked={dotOption === 'dots'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-dots" className="ms-2 text-sm font-medium text-gray-900">Dots</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-classy"
                                                  type="radio"
                                                  value="classy"
                                                  checked={dotOption === 'classy'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-classy" className="ms-2 text-sm font-medium text-gray-900">Classy Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-classy-rounded"
                                                  type="radio"
                                                  value="classy-rounded"
                                                  checked={dotOption === 'classy-rounded'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-classy-rounded" className="ms-2 text-sm font-medium text-gray-900">Classy Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-square"
                                                  type="radio"
                                                  value="square"
                                                  checked={dotOption === 'square'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-square" className="ms-2 text-sm font-medium text-gray-900">Square</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input
                                                  id="dotOption-extra-rounded"
                                                  type="radio"
                                                  value="extra-rounded"
                                                  checked={dotOption === 'extra-rounded'}
                                                  onChange={(e) => setDotOption(e.target.value)}
                                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                             />
                                             <label htmlFor="dotOption-extra-rounded" className="ms-2 text-sm font-medium text-gray-900">Extra Rounded</label>
                                        </div>
                                   </div>

                                   <div className="mb-3">
                                        <label className="mb-2 block">Color of QR Code</label>
                                        <input
                                             type="color"
                                             value={color}
                                             onChange={(e) => setColor(e.target.value)}
                                             className="block w-full rounded-md border border-gray-300 focus:outline-none py-1 px-1.5 text-gray-500"
                                        />
                                   </div>

                                   <div className="mb-3">
                                        <label className="mb-2 block">Background Color</label>
                                        <input
                                             type="color"
                                             value={backgroundColor}
                                             onChange={(e) => setBackgroundColor(e.target.value)}
                                             className="block w-full rounded-md border border-gray-300 focus:outline-none py-1 px-1.5 text-gray-500"
                                        />
                                   </div>

                                   <div className="mb-3">
                                        <label className="mb-2 block">Link/Data/Info</label>
                                        <input
                                             type="text"
                                             placeholder="Enter the data"
                                             value={data}
                                             onChange={(e) => setData(e.target.value)}
                                             className="block w-full rounded-md border border-gray-300 focus:outline-none py-1 px-1.5 text-gray-500"
                                        />
                                   </div>

                                   <button type="button" onClick={handleDownload} className="block w-full bg-purple-700 text-white rounded-md py-2 mt-4">
                                        Generate & Download QR Code
                                   </button>
                              </form>
                         </div>
                    </div>

                    <div className="flex -translate-x-20 md:translate-x-10 scale-50 md:scale-75 bg-white flex-wrap content-center justify-center rounded-r-md mx-auto shadow-2xl rounded-4xl">
                         <div className="w-full h-full rounded-r-md flex items-center justify-center">
                                   <span className="w-full text-center">QR Code appear here,start creating Your QR Ocde</span>
                              </div>
                         {qrCodeUrl ? (
                              <canvas
                                   ref={canvasRef}
                                   className={`w-[${parseInt(dimension, 10) + parseInt(padding, 10) * 2}px] h-[${parseInt(dimension, 10) + parseInt(padding, 10) * 2}px] bg-center rounded-3xl bg-no-repeat bg-cover`}
                              />
                         ) : (
                              <div className="w-full h-full rounded-r-md flex items-center justify-center">
                                   <span className="w-full text-center">QR Code Preview</span>
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default Interface;