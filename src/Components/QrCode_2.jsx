import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const QrCodeGenerator = () => {
    const [data, setData] = useState("https://www.facebook.com/");
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg");
    const [dotsColor, setDotsColor] = useState("#4267b2");
    const [backgroundColor, setBackgroundColor] = useState("#e9ebee");
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const qrCodeRef = useRef(null);

    const generateQRCode = () => {
        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data,
            image,
            dotsOptions: {
                color: dotsColor,
                type: "rounded"
            },
            backgroundOptions: {
                color: backgroundColor,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 20
            }
        });

        qrCode.update({ data, image, dotsOptions: { color: dotsColor }, backgroundOptions: { color: backgroundColor } });

        // Generate the QR code and set the URL
        qrCode.getRawData('svg').then((svg) => {
            const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);
            setQrCodeUrl(url);
        });
    };

    useEffect(() => {
        generateQRCode(); // Generate QR code whenever inputs change
    }, [data, image, dotsColor, backgroundColor]);

    const handleDownload = () => {
        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data,
            image,
            dotsOptions: {
                color: dotsColor,
                type: "classy-rounded"
            },
            backgroundOptions: {
                color: backgroundColor,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 20
            }
        });

        qrCode.download({ name: "qr_code", extension: "jpeg" });
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            <form>
                <div>
                    <label>Data:</label>
                    <input
                        type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>
                    <label>Dots Color:</label>
                    <input
                        type="color"
                        value={dotsColor}
                        onChange={(e) => setDotsColor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Background Color:</label>
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                </div>
            </form>

            {qrCodeUrl && (
                <div>
                    <h2>Preview:</h2>
                    <img src={qrCodeUrl} alt="QR Code Preview" />
                </div>
            )}

            <button onClick={handleDownload} style={{ marginTop: "10px" }}>
                Download QR Code
            </button>
        </div>
    );
}

export default QrCodeGenerator;
