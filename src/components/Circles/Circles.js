import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';

const Circles = () => {
  const numCircles = 100; // Número de círculos que deseas generar

  const circleAnimations = useTrail(numCircles, {
    from: { left: '-50%', top: '-50%', opacity: 0 },
    to: { left: '100%', top: '100%', opacity: 1 },
    config: { duration: 2000 },
    reset: true,
    reverse: true,
    loop: true,
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {circleAnimations.map((props, index) => (
        <animated.div
          key={index}
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'orange',
            ...props,
          }}
        />
      ))}
    </div>
  );
};

export default Circles;
