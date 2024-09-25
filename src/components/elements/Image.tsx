'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

const Image = (props:any) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        'overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        rounded
      )}
    >
      <NextImage
        className={clsx(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        // priority={true}
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
