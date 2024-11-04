import React, { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CaptureImage = ({ buttonText, buttonAction }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  // Capture the photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the video
    canvas.width = 200;
    canvas.height = 200;

    // Draw the current frame from the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height); // Corrected to draw from (0, 0)

    // Convert canvas image to data URL
    const dataUrl = canvas.toDataURL("image/png");
    setCapturedImage(dataUrl);
  };

  const uploadImage = async () => {
    if (capturedImage) {
      try {
        const response = await axios.post("http://localhost:3000/upload", {
          image: capturedImage,
        });
        
        alert("Image uploaded successfully!");
        navigate("/signin");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <h2>Capture Your Photo</h2>

      {/* Video preview */}
      <div style={{ marginBottom: '20px' }}>
        <video ref={videoRef} autoPlay style={{ width: '300px', height: '300px' }} />
      </div>

      {/* Canvas to hold the captured image */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div style={{ marginBottom: '20px' }}>
        {/* Buttons to control camera */}
        <button className="btn-dark ml-[10px]" onClick={startCamera}>Start Camera</button>
        <button className="btn-dark ml-[10px]" onClick={capturePhoto}>Capture Photo</button>
        <button className="btn-dark ml-[10px]" onClick={buttonAction|| uploadImage }>{buttonText || 'Upload Image' }</button>
      </div>

      {/* Display captured image */}
      {capturedImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Captured Photo:</h3>
          <img src={capturedImage} alt="Captured" style={{ width: '300px', height: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default CaptureImage;
