"use client";

import Image from "next/image";
import { useRef } from "react";

// A small image that opens full size on top of the page when clicked, so text on it can be read.
// Closes with the × button, Escape, or a click outside the image.
export default function ZoomImage({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge: ${alt}`}
        className={`group relative block cursor-zoom-in ${className}`}
      >
        {/* The hover fade sits on the image so it doesn't break blend modes passed in imageClassName. */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={95}
          className={`transition-opacity group-hover:opacity-80 ${imageClassName}`}
        />
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-foreground/80"
      >
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element -- shown at its natural size */}
          <img src={src} alt={alt} className="block max-h-[90vh] max-w-[94vw] bg-background object-contain" />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center bg-background text-xl text-foreground shadow transition-colors hover:text-accent"
          >
            ×
          </button>
        </div>
      </dialog>
    </>
  );
}
