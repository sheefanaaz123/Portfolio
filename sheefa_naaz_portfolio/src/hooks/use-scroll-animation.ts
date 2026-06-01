'use client';

import { useRef, useEffect, useState } from 'react';
import { useMotionTemplate, useScroll, useTransform } from 'motion/react';

/**
 * Hook for parallax scroll effect
 * @param offset - Multiplier for scroll effect (higher = more dramatic)
 */
export const useParallax = (offset = 0.5) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollY, (value) => value * offset);
  return { ref, y };
};

/**
 * Hook for fade-in on scroll effect
 */
export const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return { ref, opacity, y };
};

/**
 * Hook for scale-up on scroll effect
 */
export const useScaleOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'center 0.3'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, scale, opacity };
};

/**
 * Hook for slide-in from left on scroll
 */
export const useSlideInLeftOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, x, opacity };
};

/**
 * Hook for slide-in from right on scroll
 */
export const useSlideInRightOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, x, opacity };
};

/**
 * Hook for rotate on scroll effect
 */
export const useRotateOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, rotate, opacity };
};

/**
 * Hook for staggered animations on scroll
 */
export const useStaggerOnScroll = (itemCount: number) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const variants = Array.from({ length: itemCount }, (_, i) => {
    const delay = i * 0.1;
    return {
      x: useTransform(scrollYProgress, [0, 1], [-50 - i * 10, 0]),
      opacity: useTransform(scrollYProgress, [Math.max(0, delay - 0.1), Math.min(1, delay + 0.3)], [0, 1]),
    };
  });

  return { ref, variants };
};

/**
 * Hook for color change on scroll
 */
export const useColorChangeOnScroll = (startColor: string, endColor: string) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const color = useMotionTemplate`color-mix(in oklch, ${startColor} ${useTransform(scrollYProgress, [0, 1], [100, 0])}%, ${endColor})`;

  return { ref, color };
};

/**
 * Hook for blur effect on scroll
 */
export const useBlurOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'center 0.2'],
  });

  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return { ref, blur, opacity };
};

/**
 * Hook for sticky header effect
 */
export const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isSticky };
};
