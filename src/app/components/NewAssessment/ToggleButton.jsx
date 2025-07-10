

'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ToggleButton() {
  const router = useRouter();
  const pathname = usePathname();

  const options = ['New Assessment', 'History', 'Certificate'];
  const paths = ['/newassessment', '/history', '/certificate'];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = paths.findIndex((path) => pathname.startsWith(path));
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  const handleClick = (index) => {
    setActiveIndex(index);
    router.push(paths[index]);
  };

  return (
    <div className="relative mx-auto w-full max-w-[95vw] sm:max-w-[636px] h-auto sm:h-[60px] rounded-[40px] bg-[rgba(206,245,215,1)] p-1">
      {/* Sliding green background */}
      <div
        className="absolute top-[5px] left-[2px] h-[46px] sm:h-[50px] w-[calc(100%/3 - 4px)] sm:w-[208px] rounded-[40px] transition-all duration-300 ease-in-out bg-[rgba(3,145,35,1)]"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />

      {/* Buttons */}
      <div className="flex h-full items-center px-[5px] gap-[4px] relative z-10">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-[208px] h-[50px] text-[20px] font-medium rounded-[40px] transition-colors duration-300 ${
              activeIndex === index ? 'text-white' : 'text-gray-700'
            }`}
          >
            <div className="font-[Mulish] font-medium text-[20px] leading-[20px] tracking-[0px] text-center">
              {option}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
