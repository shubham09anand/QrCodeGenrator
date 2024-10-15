import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import logo from "../Assets/logoSVG.svg";
import { Link } from 'react-router-dom';

const Interface = () => {
     const [image, setImage] = useState(logo);
     const padding = '20';
     const [start, setStart] = useState(false);
     const [userLogoImage, setUserLogoImage] = useState(null);
     const [dimension] = useState(550);
     const [dotOption, setDotOption] = useState('rounded');
     const [color, setColor] = useState('#000000');
     const [backgroundColor, setBackgroundColor] = useState('#ffffff');
     const [data, setData] = useState('Enter the text/url/info');
     const [qrCodeUrl, setQrCodeUrl] = useState('');
     const canvasRef = useRef(null);

     const now = new Date();
     const currentTime = now.toLocaleTimeString();

     const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];

     useEffect(() => {
          if (userLogoImage && userLogoImage[0]) {
               if (!validImageTypes.includes(userLogoImage[0]?.type)) {
                    alert('Upload only images (JPEG, PNG, , SVG)');
                    setUserLogoImage(null);
                    return;
               }
          }
          // eslint-disable-next-line
     }, [userLogoImage]);

     const handleGenerateQRCode = () => {

          setStart(true);

          if (!data.trim()) {
               return;
          }

          const qrCode = new QRCodeStyling({
               width: parseInt(dimension, 10),
               height: parseInt(dimension, 10),
               type: 'svg',
               data,
               image: userLogoImage ? URL.createObjectURL(userLogoImage[0]) : image,
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
          // eslint-disable-next-line
     }, [dimension, dotOption, color, backgroundColor, data, image, padding, userLogoImage, start, image]);

     const handleDownload = () => {

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
          <>
               <div style={{ backgroundImage: "url('https://img.freepik.com/free-vector/wave-gradient-blue-background-modern-design_343694-3814.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }} className="h-full w-screen content-center justify-center lg:p-1 xl:p-10 -mt-14">
                    <div className="lg:h-screen flex place-content-center items-center flex-col-reverse lg:flex-row w-full lg:w-full xl:w-11/12 mx-auto">

                         <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-qr-code-scan size-40 absolute right-10 top-40 opacity-30" viewBox="0 0 16 16">
                                   <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
                                   <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                                   <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                                   <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                                   <path d="M12 9h2V8h-2z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-qr-code-scan size-16 absolute left-10 top-20 opacity-20" viewBox="0 0 16 16">
                                   <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
                                   <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                                   <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                                   <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                                   <path d="M12 9h2V8h-2z" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-qr-code-scan size-40 absolute bottom-10 opacity-30" viewBox="0 0 16 16">
                                   <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
                                   <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                                   <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                                   <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                                   <path d="M12 9h2V8h-2z" />
                              </svg>
                         </div>

                         <div className="-translate-y-32 lg:translate-y-0 flex place-content-center items-center justify-center rounded-l-md mt-5 w-full sm:w-3/4">

                              <div className="w-full sm:shadowBox p-5 rounded-md">

                                   <Link to='/NormalQRCode' className='text-blue mb-2 pl-1 text-white'>Genrate Normal QR Code</Link>

                                   <div>
                                        <label className="mb-5 block font-semibold text-4xl lg:text-5xl text-blue-950">Enter your text</label>
                                        <input type="text" placeholder="Start Typing...." value={data} onChange={(e) => setData(e.target.value)} className="block w-full bg-transparent border-b text-lg border-gray-300 focus:outline-none py-1 px-1.5 text-white" />
                                   </div>

                                   <div className="my-5">
                                        <div className='text-black pl-2 py-2 text-lg font-semibold'>Upload Your photo/logo/symbol which will be placed at center of QR code </div>
                                        <div id="image-preview" className="flex backdrop-blur-xl py-1 w-fit lg:w-full mb-4 items-center text-center cursor-pointer">
                                             <input onChange={(e) => setUserLogoImage(e.target.files)} id="upload" type="file" className="hidden" accept="image/*" />
                                             <label htmlFor="upload" className="flex place-content-center items-center cursor-pointer">
                                                  <div className='mr-2 flex place-content-center items-center w-fit h-fit  p-2 rounded-md'>
                                                       <div className='relative'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-8 hover:opacity-80">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                            </svg>

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="black" className="w-3 h-3 absolute bottom-0 -right-1 border-black border bg-white rounded-full p-[1.5px]">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                            </svg>
                                                       </div>
                                                       <h5 className="text-lg font-bold tracking-tight ml-3">{userLogoImage === null ? 'Upload picture' : 'Re-upload'}</h5>
                                                  </div>

                                                  <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                                             </label>
                                                  {userLogoImage && (
                                                       <div className='relative mt-2'>
                                                            <img className='w-16 h-10 rounded-sm' src={userLogoImage ? URL.createObjectURL(userLogoImage[0]) : null} alt="imgErr" />
                                                            <svg onClick={() => setUserLogoImage(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 absolute -top-2 -right-2 bg-white rounded-full cursor-pointer">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                       </div>
                                                  )}

                                                  {userLogoImage && (
                                                       <div className="text-white font-thin text-lg w-32 sm:w-40 md:w-80 truncate pl-5">{userLogoImage[0] ? `${userLogoImage[0].name}` : 'No file selected'}</div>
                                                  )}
                                                  
                                                  {image !== null && userLogoImage === null && (
                                                       <div className='relative'>
                                                            <img className='w-16 h-10 rounded-sm' src={image} alt="imgErr" />
                                                            <svg onClick={() => setImage(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 absolute -top-2 -right-2 bg-white rounded-full cursor-pointer">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                       </div>
                                                  )}
                                        </div>
                                   </div>

                                   <div className="my-5 block text-xl font-semibold">Dot Options</div>
                                   <div className="mb-5 flex flex-wrap">
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-rounded" type="radio" value="rounded" checked={dotOption === 'rounded'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-rounded" className="ms-2 text-sm font-bold text-gray-900">Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-dots" type="radio" value="dots" checked={dotOption === 'dots'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-dots" className="ms-2 text-sm font-bold text-gray-900">Dots</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-classy" type="radio" value="classy" checked={dotOption === 'classy'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-classy" className="ms-2 text-sm font-bold text-gray-900">Classy Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-classy-rounded" type="radio" value="classy-rounded" checked={dotOption === 'classy-rounded'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-classy-rounded" className="ms-2 text-sm font-bold text-gray-900">Classy Rounded</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-square" type="radio" value="square" checked={dotOption === 'square'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-square" className="ms-2 text-sm font-bold text-gray-900">Square</label>
                                        </div>
                                        <div className="flex items-center m-2">
                                             <input id="dotOption-extra-rounded" type="radio" value="extra-rounded" checked={dotOption === 'extra-rounded'} onChange={(e) => setDotOption(e.target.value)} className="w-4 h-4 border-black border-2 bg-gray-100 outline-none" />
                                             <label htmlFor="dotOption-extra-rounded" className="ms-2 text-sm font-bold text-gray-900">Extra Rounded</label>
                                        </div>
                                   </div>

                                   <div>
                                        <label className="mb-2 block text-xl font-semibold">Color of QR Code</label>
                                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="block w-full rounded-md focus:outline-none py-1 px-1.5 text-gray-500" />
                                   </div>

                                   <div>
                                        <label className="mb-2 block text-xl font-semibold">Background Color</label>
                                        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} className="block w-full focus:outline-none py-1 px-1.5 text-gray-500" />
                                   </div>
                              </div>
                         </div>

                         <div className="w-fit flex flex-col place-content-center items-center scale-[60%]">

                              {qrCodeUrl ? (
                                   <canvas ref={canvasRef} className={`w-[${parseInt(dimension, 10) + parseInt(padding, 10) * 2}px] h-[${parseInt(dimension, 10) + parseInt(padding, 10) * 2}px] bg-center rounded-3xl bg-no-repeat bg-cover  lg:mt-0`}
                                   />
                              ) : (
                                   <div className="w-full h-full rounded-r-md flex items-center justify-center">
                                        <span className="w-full text-center text-lg">QR Code Preview</span>
                                   </div>
                              )}
                              <button type="button" onClick={handleDownload} className="hover:bg-blue-400 flex place-content-center items-center gap-x-5 mt-10 w-fit h-fit font-semibold px-5 py-4 bg-white text-black text-2xl rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-9">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                   </svg>
                                   Generate & Download QR Codwede
                              </button>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Interface;