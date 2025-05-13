"use client";
import React, { useState } from "react";
import Image from "next/image";

const FlipImageCard = ({
  image1,
  image2,
  alt1,
  alt2,
}: {
  image1: string;
  image2: string;
  alt1: string;
  alt2: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Flip the image when clicked on both mobile and desktop
  };

  return (
    <div
      className="relative w-64 h-64 perspective-1000 cursor-pointer" onClick={handleClick}>
      <div
        className={`w-full h-full transform-style-preserve-3d transition-transform duration-500 ${ flipped ? "rotate-y-180" : ""}`}>
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={flipped ? image2 : image1} 
            alt={flipped ? alt2 : alt1}     
            width={288}
            height={408}
            className="rounded-lg object-cover"
          />
        </div>
        <div
          className="absolute w-full h-full rotate-y-180 backface-hidden"
          style={{ display: flipped ? "block" : "none" }}>
          <Image
            src={flipped ? image1 : image2}
            alt={flipped ? alt1 : alt2}     
            width={288}
            height={408}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipImageCard;
