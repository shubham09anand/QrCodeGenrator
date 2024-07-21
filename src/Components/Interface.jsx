import React, { useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import logo from "../Assets/logoSVG.svg"

const Interface = () => {
     const image = logo;
     const [dimension, setDimension] = useState('600');
     const [dotOption, setDotOption] = useState('rounded');
     const [color, setColor] = useState('#000000');
     const [backgroundColor, setBackgroundColor] = useState('#ffffff');
     const [data, setData] = useState('Entert the text/url/info');
     const [qrCodeUrl, setQrCodeUrl] = useState('');
     const [qrCodeDownload, setQrCodeDownload] = useState(null)
 
     const handleGenerateQRCode = () => { 
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
                    margin: 20
               }
          });

          qrCode.getRawData('svg').then((svg) => {
               const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
               const url = URL.createObjectURL(svgBlob);
               setQrCodeUrl(url);
          });
          setQrCodeDownload(qrCode)
     };

     useEffect(() => {
          handleGenerateQRCode();
     }, [dimension, dotOption, color, backgroundColor, data, image]);

     const handleDownload = () => {
          if (dimension < 50 || dimension > 2500) {
               setDimension(600)
               return
          }
          if (!data.trim()) {
               setData("Entert the text/url/info");
               return
          }
          if (qrCodeDownload) {
               qrCodeDownload.download({
                    name: 'qr_code',
                    extension: 'jpeg'
               });
          }
     };

     return (
          <div className="min-h-screen w-screen content-center justify-center py-10 p-5">
               <div className="flex shadow-md w-2/3 mx-auto rounded-3xl">
                    <div className="flex flex-wrap content-center justify-center rounded-l-md w-1/2">
                         <div className="w-full p-5 bg-gray-50 shadow-2xl rounded-3xl">
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
                                        <label className="mb-2 block">Color</label>
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

                                   <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="block w-full bg-purple-700 text-white rounded-md py-2 mt-4"
                                   >
                                        Generate QR Code
                                   </button>
                              </form>
                         </div>
                    </div>

                    <div className="flex bg-white flex-wrap content-center justify-center rounded-r-md mx-auto w-1/2">
                         {qrCodeUrl ? (
                              <img
                                   className={`w-[${dimension}] h-[${dimension}] bg-center bg-no-repeat bg-cover rounded-r-md`}
                                   src={qrCodeUrl}
                                   alt="QR Code"
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
