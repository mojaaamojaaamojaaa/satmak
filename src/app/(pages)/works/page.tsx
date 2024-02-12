"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import Link from "next/link";
import AlbumImages from "@/app/components/works/albumImages";
import { bassoonAlbums, pianoAlbums } from "../../components/works/albums";
import FadeIn from "@/app/components/animation/FadeIn";

export default function Page() {
  useEffect(() => {
    //背景色を変化させるアニメーション
    gsap.to(document.body, {
      backgroundColor: "#2b5549", //変更したい色
      duration: 0.8,
      ease: "power3.in",
    });

    //アンマウントされる時に背景色を元に戻す
    return () => {
      gsap.to(document.body, {
        backgroundColor: "#ece5d3",
        duration: 0.5,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <FadeIn delay={1.5}>
      <div className="p-5  min-h-screen text-white  ">
        <div className=" ">
          <p className="text-3xl ">Works</p>
        </div>
        <div className="m-5 text-2xl">
          <h2 className="text-orange">Bassoon</h2>
        </div>
        <div className="flex justify-center m-5 ">
          <div className="text-xl text-center ">
            <p>bassoon works</p>
            <div className="m-3 text-lg">
              <span className="mr-2">bandcamp :</span>
              <Link href="https://mojaaamojaaa.bandcamp.com/">
                <FontAwesomeIcon
                  icon={faBandcamp}
                  className="text-blue text-xl "
                />
              </Link>
            </div>
            <AlbumImages albums={bassoonAlbums} albumCategory="bassoon" />
          </div>
        </div>
        <div className="m-5 text-2xl">
          <h2 className="text-orange">Classical Music</h2>
        </div>
        <div className="flex justify-center m-5 ">
          <div className="text-xl text-center ">
            <p>piano works</p>
            <div className="m-3 text-lg">
              <span className="mr-2">YouTube :</span>
              <Link href="https://youtube.com/playlist?list=PLMqT9Hcz99gX-LjF05-XLJMJjsr9DXcpW&si=Tv3bmX1kMwZI8X_E">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-red text-xl "
                />
              </Link>
            </div>
            <AlbumImages albums={pianoAlbums} albumCategory="piano" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
