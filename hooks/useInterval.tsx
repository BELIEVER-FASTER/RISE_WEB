import { useEffect, useRef } from 'react';

export function useInterval<T>(callback: T, duration: number): void {
  const savedCallback = useRef<T | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      (savedCallback.current as unknown as () => void)();
    }

    const id = setInterval(tick, duration);
    return () => clearInterval(id);
  }, []);
}
