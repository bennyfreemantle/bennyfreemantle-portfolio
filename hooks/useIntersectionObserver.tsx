import React, { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  ref: React.RefObject<HTMLDivElement>,
  onIntersect: () => void
): void {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onIntersect]);
}
