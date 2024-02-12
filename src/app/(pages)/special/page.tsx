"use client";
import { useEffect } from "react";
import HangManGame from "@/app/components/HangMan/HangManGame";
import ModalHowToPlay from "@/app/components/HangMan/modalHowToPlay";
import FadeIn from "@/app/components/animation/FadeIn";
import Image from "next/image";
import gsap from "gsap";

export default function Page() {
  useEffect(() => {
    // GSAPを使用して背景色を変化させる
    gsap.to(document.body, {
      backgroundColor: "#ece5d3",
      duration: 0.8,
      ease: "power3.in",
    });

    // コンポーネントがアンマウントされる時に背景色を戻す
    return () => {
      gsap.to(document.body, {
        backgroundColor: "#ece5d3",
        duration: 0.5,
        ease: "power3.in",
      });
    };
  }, []);
  return (
    <FadeIn delay={1}>
      <div className="min-h-screen flex-col justify-center items-center my-5 ">
        <div className="flex justify-center">
          <FadeIn delay={1} y={100} duration={5}>
            <Image
              src={
                "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707532118/hangman_gputza.png"
              }
              height={200}
              width={400}
              alt="hangman"
            />
            <p className="mt-1 text-center">Classical Music Words ver.</p>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={3}>
            <HangManGame />
          </FadeIn>
        </div>
        <div>
          <ModalHowToPlay />
        </div>
      </div>
    </FadeIn>
  );
}
