"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Album } from "./albums";

gsap.registerPlugin(ScrollTrigger);
interface AlbumImagesProps {
  albums: Album[];
  albumCategory: string;
}

const AlbumImages: React.FC<AlbumImagesProps> = ({ albums, albumCategory }) => {
  useEffect(() => {
    //アルバムや曲のジャケ画像をふわっと表示させるアニメーション
    albums.forEach((_, index) => {
      const uniqueId = `album-image-${albumCategory}-${index}`; //配列名とその配列のindexをユニークidとして使う

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
  }, [albums, albumCategory]);

  return (
    <div className="flex flex-wrap justify-center">
      {albums.map((album, index) => {
        const uniqueId = `album-image-${albumCategory}-${index}`;
        return (
          <div key={uniqueId} className={`p-10 ${uniqueId} relative`}>
            <Link href={album.link} target="blank">
              <div className="relative">
                <Image
                  src={album.src}
                  height={300}
                  width={300}
                  alt={album.alt}
                  className="rounded-xl"
                />
              </div>
            </Link>
            <p className="text-base mt-3 ">{album.alt}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AlbumImages;
