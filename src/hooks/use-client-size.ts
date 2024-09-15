import { useRef, useState } from 'react';

type Size = [width: number, height: number];

const initialSize: Size = [0, 0];

export const useClientSize = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<Size>(initialSize);

  const assignRef = (element: T) => {
    if (!element || !!ref.current) {
      return;
    }

    ref.current = element;
    const rect = element.getBoundingClientRect();

    setSize([rect.width, rect.height]);
  };

  const isAssigned = size !== initialSize;

  return { assignRef, size, isAssigned } as const;
};
