"use client";
import { useEffect } from "react";
import CollectionImages from "@/app/components/works/collectionImages";
import { collectionsFlyer } from "@/app/components/works/collections";
import gsap from "gsap";
import FadeIn from "@/app/components/animation/FadeIn";

export default function Page() {
  useEffect(() => {
    //GSAPを使用して背景色を変化させる。
    gsap.to(document.body, {
      backgroundColor: "#d36138",
      duration: 0.8,
      ease: "power3.in",
    });

    //コンポーネントがアンマウントされる時に背景色を元に戻す
    return () => {
      gsap.to(document.body, {
        backgroundColor: "#ece5d3", //元の色
        duration: 0.3,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <FadeIn delay={2}>
      <div className="flex min-h-screen p-5 flex-wrap ">
        <div className="w-full">
          <h1 className="text-3xl">Archive</h1>
          <p className="text-xl m-5">Artwork,Flyer etc.</p>
          <CollectionImages
            collections={collectionsFlyer}
            collectionCategory="Flyer"
          />
        </div>
      </div>
    </FadeIn>
  );
}
