import React, { useState } from "react";

interface IPosition {
  xCoordinate: number;
  yCoordinate: number;
}

export default function Draggable({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState<IPosition>({ xCoordinate: 0, yCoordinate: 0 });
  const [offset, setOffset] = useState<IPosition>({ xCoordinate: 0, yCoordinate: 0 });
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.style.opacity = "1"
    const xCoordinate = event.clientX - offset.xCoordinate;
    const yCoordinate = event.clientY - offset.yCoordinate;
    const parentRect = event.currentTarget.parentElement?.getBoundingClientRect();

    if (!parentRect || xCoordinate < 0 || xCoordinate > parentRect.width - target.clientWidth || yCoordinate < 0 || yCoordinate > parentRect.height - target.clientHeight || xCoordinate > window.innerWidth || yCoordinate > window.innerHeight) {
      return;
    }

    setPosition({ xCoordinate, yCoordinate });
  };

  const handlePress = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    setOffset({ xCoordinate: rect.left - position?.xCoordinate + event.nativeEvent.offsetX, yCoordinate: rect.top - position?.yCoordinate + event.nativeEvent.offsetY });
  };

  return (
    <div
      className="Draggable"
      style={{
        left: position?.xCoordinate,
        top: position?.yCoordinate,
        position: "relative",
        display: "inline-block"
      }}
      draggable="true"
      onMouseDown={(event) => handlePress(event)}
      onDragEnd={(event) => handleDrop(event)}
      data-testid="draggable"
    >
      {children}
    </div>
  );
}
