import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg, spareImgClassName }) => (
          <BentoGridItem
            key={id} 
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            spareImgClassName={spareImgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
