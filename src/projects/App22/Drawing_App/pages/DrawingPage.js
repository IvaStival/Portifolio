import { useRef, useState } from "react";

import "./index.css";

const DrawingPage = () => {
  const [size, setSize] = useState(20);
  const [color, setColor] = useState("black");
  const canvasRef = useRef(null);

  let x;
  let y;
  let isPressed = false;

  const drawCircle = (context, x, y) => {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  };

  const drawLine = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
  };

  const handleMouseDown = (e) => {
    isPressed = true;
    x = e.nativeEvent.offsetX;
    y = e.nativeEvent.offsetY;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    drawCircle(context, x, y);
  };

  const handleMouseUp = (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
  };

  const handleMouseMove = (e) => {
    if (isPressed) {
      const x2 = e.nativeEvent.offsetX;
      const y2 = e.nativeEvent.offsetY;

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      drawCircle(context, x2, y2);
      drawLine(context, x, y, x2, y2);

      x = x2;
      y = y2;
    }
  };

  // Handle Buttons
  // Color
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Size
  const handleSizeIncreaseClick = (e) => {
    setSize(size + 5 >= 80 ? 80 : size + 5);
  };

  const handleSizeDecreaseClick = (e) => {
    setSize(size - 5 <= 0 ? 5 : size - 5);
  };

  // Clear
  const handleClearClick = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
  };
  return (
    <div className="content">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        id="canvas"
        width="800"
        height="800"
      ></canvas>
      <div className="toolbox">
        <button onClick={handleSizeDecreaseClick} id="decrease">
          -
        </button>
        <span id="size">{size}</span>
        <button onClick={handleSizeIncreaseClick} id="increase">
          +
        </button>
        <input type="color" onChange={handleColorChange} id="color"></input>
        <button onClick={handleClearClick} id="clear">
          X
        </button>
      </div>
    </div>
  );
};

export default DrawingPage;
