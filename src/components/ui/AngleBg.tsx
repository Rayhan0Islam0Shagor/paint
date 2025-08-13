import { useEffect, useState } from 'react';

interface AngleBgProps {
  color?: string;
  slope?: number; // how steep
  height?: number; // fixed height in px
}

const AngleBg = ({
  color = 'fill-yellow-300',
  slope = 0.15,
  height = 200,
}: AngleBgProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (!width) return null;

  const yOffset = height - height * slope;
  const path = `M0,${yOffset} L${width},0 L${width},${height} L0,${height} Z`;

  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      style={{ height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <path d={path} className={color} />
    </svg>
  );
};

export default AngleBg;
