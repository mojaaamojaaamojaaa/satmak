"use client";
import { gsap } from "gsap";
import { TransitionContext } from "./context/TransitionContext";
import { useState, useContext, useRef, ReactNode } from "react";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";

//画面遷移の際の初期化
type TransitionLayoutProps = {
  children: ReactNode;
};

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline, background } = useContext(TransitionContext);
  const el = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    //displayされているか
    if (children !== displayChildren) {
      //outroのアニメーションがなければすぐに画面遷移のアニメーションを実行する
      if (timeline.duration() === 0) {
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          //outroのアニメーションが終った時に初期化する。
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  //背景色に背景色にあわせて変化
  useIsomorphicLayoutEffect(() => {
    if (el.current !== null) {
      gsap.to(el.current, {
        background,
        duration: 1,
      });
    }
  }, [background]);

  return <div ref={el}>{displayChildren}</div>;
}
