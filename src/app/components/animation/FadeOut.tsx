"use client";
import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import { Box } from "theme-ui";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface FadeInProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  ease?: string;
}

export const FadeOut = ({
  as,
  children,
  duration,
  delay,
  x,
  y,
  ease,
}: FadeInProps) => {
  const el = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      opacity: 0,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: ease || "sine",
    });
  }, []);

  return (
    <Box
      as={as || "div"}
      sx={{
        opacity: 1, //デフォの透明度
        transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      }}
      ref={el}
    >
      {children}
    </Box>
  );
};
