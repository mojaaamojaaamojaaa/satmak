"use client";
import { useEffect } from "react";
import FadeIn from "@/app/components/animation/FadeIn";
import gsap from "gsap";
import Contact from "@/app/components/contact/contact";
import Link from "next/link";
export default function Page() {
  useEffect(() => {
    // GSAPを使用して背景色を変化させる
    gsap.to(document.body, {
      backgroundColor: "#4974a5",
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
    <div className="flex-col mt-5 mb-5  justify-center min-h-screen ">
      <p className="ml-5 text-3xl ">Contact</p>
      <div className="mt-12 mx-4 md:mx-24 lg:mx-32  xl:mx-40 2xl:mx-48  justify-center  ">
        <Contact />
      </div>
      <FadeIn delay={1.5}>
        <div className="my-16  mx-4 md:mx-24 lg:mx-32  xl:mx-40 2xl:mx-48  justify-center ">
          <p>Thank you for reaching out to me.</p>
          <p>Feel free to contact me via social media as well.</p>
          <p className="mt-2">Im looking forward to hearing from you!</p>
        </div>
      </FadeIn>
    </div>
  );
}
