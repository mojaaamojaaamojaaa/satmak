"use client";
import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import { Box } from "theme-ui";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

//回転して登場
interface FadeInProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  rotate: number;
  ease?: string;
}

const FadeInRotate = ({
  as,
  children,
  duration,
  delay,
  x,
  y,
  ease,
  rotate,
}: FadeInProps) => {
  const el = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      opacity: 1,
      delay: delay || 0,
      duration: duration || 0.5,
      rotate: rotate,
      ease: ease || "power3.out",
    });
  }, []);

  return (
    <Box
      as={as || "div"}
      sx={{
        opacity: 0, //デフォの透明度
        transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      }}
      ref={el}
    >
      {children}
    </Box>
  );
};

export default FadeInRotate;
