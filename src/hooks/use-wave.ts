import { useState } from "react";

export type Wave = {
  id: string;
};
const useWave = (duration = 500): [Wave[], () => void] => {
  const [waves, setWaves] = useState<{ id: string }[]>([]);

  const createWave = () => {
    const newWave = {
      id: new Date().getTime().toString(),
    };
    setWaves((oldWave) => [...oldWave, newWave]);
    setTimeout(() => {
      setWaves((oldWave) => oldWave.filter((wave) => wave.id !== newWave.id));
    }, duration);
  };

  return [waves, createWave];
};

export default useWave;
