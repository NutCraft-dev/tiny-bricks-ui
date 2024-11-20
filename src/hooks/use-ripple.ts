import { useState, MouseEvent } from "react";

export type Ripple = {
  id: string;
  x: number;
  y: number;
  size: number;
};
const useRipple = (
  duration = 500,
): [Ripple[], (event: MouseEvent<HTMLButtonElement>) => void] => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: new Date().getTime().toString(), // Unique id for each ripple
    };
    setRipples((oldRipples) => [...oldRipples, newRipple]);

    // Remove ripple after animation is done
    setTimeout(() => {
      setRipples((oldRipples) =>
        oldRipples.filter((ripple) => ripple.id !== newRipple.id),
      );
    }, duration); // Match the animation duration
  };

  return [ripples, createRipple];
};

export default useRipple;
