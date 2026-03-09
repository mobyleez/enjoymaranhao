import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        cursor.classList.add('hovered');
        ring.classList.add('hovered');
      }
    };

    const onOut = () => {
      cursor.classList.remove('hovered');
      ring.classList.remove('hovered');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
};

export default CustomCursor;
