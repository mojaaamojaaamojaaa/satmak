"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
//背景に自作の楽譜をうっすら表示
const BackImage = () => {
  const backgroundImages: string[] = [
    "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707534373/myScoreData/backImage1_me43mp.png",
    "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707534373/myScoreData/backImage3_hdkup8.png",
    "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707534372/myScoreData/backImage2_npb6nr.png",
  ];

  const [randomImage, setRandomImage] = useState("");
  //randomに画像を取得
  useEffect(() => {
    const backImage: string =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setRandomImage(backImage);
  }, []);

  return (
    <div className={`w-full h-full z-0 opacity-10 `}>
      {/*データを取得できない時のエラーを防ぐ*/}
      {randomImage && (
        <Image src={randomImage} layout="fill" objectFit="cover" alt="bou" />
      )}
    </div>
  );
};
export default BackImage;
