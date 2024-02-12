"use client";
import React, { useState, createContext, ReactNode } from "react";
import gsap from "gsap";

//ページ遷移のアニメーションが終了するまでレンダリングが行われないように管理するためのコンテクスト
type TransitionContextProps = {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
};

const TransitionContext = createContext<TransitionContextProps>({
  timeline: gsap.timeline({ paused: true }),
  setTimeline: () => {},
  background: "inherit",
  setBackground: () => {},
});
//bodyタグ直下にこのプロバイダーでラップしてページ全体のコンポーネントのアニメーションの進行を共有できるようにする。
const TransitionProvider = ({ children }: { children?: ReactNode }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );
  //背景色の保持の為
  const [background, setBackground] = useState("inherit");

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        background,
        setBackground,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
