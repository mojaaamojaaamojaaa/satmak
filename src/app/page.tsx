import FadeIn from "./components/animation/FadeIn";
import Image from "next/image";
import Index from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <FadeIn duration={2}>
      <div className="  relative min-h-screen overflow-hidden">
        <div className="text-3xl m-5 text-red  ">
          <span>sato makoto</span>
        </div>
        <div className=" my-5 flex justify-center items-center">
          <div className="flex justify-center items-center ">
            <Image
              src={
                "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707755011/bassoopic_usrdzz.webp"
              }
              height={200}
              width={400}
              alt="Hello,I'm makoto sato"
              className="rounded-3xl"
            />
          </div>
          <div className="flex-col  justify-center mx-10 ">
            <p className="text-2xl text-red ">佐藤諒</p>
            <p className="text-lg text-green ">
              ポートフォリオサイトとして作成しました。
            </p>
            <p className="text-lg text-black">
              制作物はGithubにコードを載せています。
            </p>
            <Link
              href="https://github.com/mojaaamojaaamojaaa"
              className="text-lg text-green"
              target="blank"
            >
              https://github.com/mojaaamojaaamojaaa
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
