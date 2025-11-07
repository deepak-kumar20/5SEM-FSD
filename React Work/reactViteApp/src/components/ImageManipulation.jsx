import cat from "./cat.png";
import { useState } from "react";
const ImageManipulation = () => {
  const [imageHeight, setImageHeight] = useState(200);
  const [imageWidth, setImageWidth] = useState(200);
  // const [backgroundColor, setBackgroundColor] = useState("white");
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);
    const [rotate, setRotate] = useState(0);
    
    const rotateImage = () => {
        setRotate(rotate + 90);
    }

  const changeBackgroundColor = () => {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  };
  const increaseHeight = () => {
    setImageHeight(imageHeight + 20);
  };
  const decreaseHeight = () => {
    setImageHeight(imageHeight - 20);
  };
  const increaseWidth = () => {
    setImageWidth(imageWidth + 20);
  };
  const decreaseWidth = () => {
    setImageWidth(imageWidth - 20);
  };
  return (
    <div>
      <h2>Image Manipulation</h2>
      <div
        style={{
          border: "2px solid black",
          width: "450px",
          padding: "10px",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={cat}
          height={imageHeight}
          width={imageWidth}
          alt="A cute cat"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, transform: `rotate(${rotate}deg)` }}
        />
      </div>
      <div>
        <h3 style={{ margin: "5px" }}>Current Height: {imageHeight}px</h3>
        <h3 style={{ margin: "5px" }}>Current Width: {imageWidth}px</h3>
      </div>
      <div style={{ margin: "10px" }}>
        <button style={{ margin: "10px" }} onClick={increaseHeight}>
          Increase Height
        </button>
        <button onClick={decreaseHeight}>Decrease Height</button>
      </div>
      <div style={{ margin: "10px" }}>
        <button style={{ margin: "10px" }} onClick={increaseWidth}>
          Increase Width
        </button>
        <button onClick={decreaseWidth}>Decrease Width</button>
      </div>
      <div>
        <button style={{ margin: "10px" }} onClick={changeBackgroundColor}>
          Change Background Color
        </button>
      </div>
      <div>
        <button style={{ margin: "10px" }} onClick={rotateImage}>
          Rotate Image
        </button>
      </div>
    </div>
  );
};
export default ImageManipulation;
