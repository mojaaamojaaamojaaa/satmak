"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Collection } from "./collections";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CollectionImagesProps {
  collections: Collection[];
  collectionCategory: string;
}

const CollectionImages: React.FC<CollectionImagesProps> = ({
  collections,
  collectionCategory,
}) => {
  useEffect(() => {
    // 画像をふわっと表示させるアニメーション
    collections.forEach((_, index) => {
      const uniqueId = `collection-image-${collectionCategory}-${index}`;

      gsap.fromTo(
        `.${uniqueId}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: `.${uniqueId}`,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [collections, collectionCategory]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex-col">
        {collections.map((collection, index) => {
          const uniqueId = `collection-image-${collectionCategory}-${index}`;
          return (
            <div key={uniqueId} className={`flex-col my-5 ${uniqueId}`}>
              <Image
                src={collection.src}
                height={collection.height}
                width={collection.width}
                alt={collection.alt}
              />
              <p className="pt-3 text-sm sm:text-base">{collection.alt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionImages;
