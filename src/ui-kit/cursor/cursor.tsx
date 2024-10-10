'use client'

import { FC, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export const Cursor: FC = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.screen.width);
    window.addEventListener('resize', () => setWidth(window.screen.width));
  }, []);
  
  return (
    <>
      { width >= 1440 && 
        <AnimatedCursor 
          showSystemCursor={true}
          innerSize={24}
          outerSize={22}
          color='181, 181, 181'
          outerAlpha={0.9}
          innerScale={0.1}
          outerScale={2}
          trailingSpeed={1}
          outerStyle={{
            filter: 'blur(3px)',
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link-cursor',
          ]}
        />
      }
    </>
  );
};