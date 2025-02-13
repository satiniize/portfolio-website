"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function ImageLoader({ path }: { path: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="rounded-2xl w-full relative aspect-[3/2] bg-sidebar bg-border shadow"> {/* Adjust width and height as needed */}
      <Image
        src={path}
        alt="Sample Image"
        width={500}
        height={300}
        onLoadingComplete={handleImageLoad}
        className={`rounded-2xl object-cover transition-opacity duration-200 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
