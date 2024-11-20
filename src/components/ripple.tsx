// Ripple.js
import { useEffect, useState } from "react";

export interface Ripple {
  x: number;
  y: number;
  size: number;
  duration?: number;
}
const Ripple = ({ x, y, size, duration = 500 }: Ripple) => {
  const [isRippling, setIsRippling] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsRippling(false), duration);
    return () => clearTimeout(timeoutId);
  }, [duration]);

  if (!isRippling) return null;
  console.log(size, x, y);
  return (
    <span
      className="absolute bg-white/50 rounded-full transform scale-0 animate-ripple"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}px`,
        left: `${x}px`,
      }}
    ></span>
  );
};

export default Ripple;
