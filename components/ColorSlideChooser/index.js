import React, { useState } from "react";
import styled from "styled-components";

export default function ColorSlideChooser({ onColorChange }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    "#bf928c", // Brown
    "#32a852", // Green
    "#c47480", // dark brown
    "#e4bce8", //Pink
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <Container>
      <label>Choose Colour:</label>
      <SlideChooser>
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            selected={color === selectedColor}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </SlideChooser>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const SlideChooser = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? "3px solid black" : "none")};
  cursor: pointer;
`;
