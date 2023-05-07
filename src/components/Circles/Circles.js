
import { animated} from 'react-spring';

export function Circles() {
  const numCircles = 20; // número de círculos a crear
  const circles = [];

  // crea un array de círculos
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: Math.random() * 100, // posición horizontal aleatoria
      y: Math.random() * 100, // posición vertical aleatoria
      size: Math.random() * 30 + 10, // tamaño aleatorio entre 10 y 40
    });
  }

  return (
    <>
      {circles.map(({ x, y, size }, i) => (
        <animated.div
          key={i}
          style={{
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: 'orange',
          }}
        />
      ))}
    </>
  );
}