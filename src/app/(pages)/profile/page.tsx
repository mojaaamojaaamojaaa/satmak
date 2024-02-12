import Profil from "@/app/components/profile/profil";
import FadeIn from "@/app/components/animation/FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import BackImage from "@/app/components/ui/backImage";

export default function Page() {
  return (
    <FadeIn>
      <div className="flex-col min-h-screen ">
        <BackImage />
        <div className="flex justify-center items-cente  ">
          <div className="my-10 sm:mx-5 w-1/2 items-center  justify-center ">
            <Profil />
          </div>

          <div className="my-16 flex-col items-center   ml-5 w-1/2 ">
            <div
              className={`justify-center text-base md:text-xl ml-10 lg:mx-40  `}
            >
              <FadeIn delay={2} x={30}>
                <p className="text-orange">Name:</p>
                <p className="mb-2 ">Makoto Sato</p>
              </FadeIn>
              <FadeIn delay={2.1} x={30}>
                <p className="text-red">Handle Name:</p>
                <p className="mb-2 ">moja</p>
              </FadeIn>
              <FadeIn delay={2.2} x={35}>
                <p className="text-yellow ">From:</p>
                <p className="mb-2 ">Kyoto,Japan</p>
              </FadeIn>
              <FadeIn delay={2.3} x={40}>
                <p className="text-green ">birth year</p>
                <p className="mb-2 ">1993</p>
              </FadeIn>
              <FadeIn delay={2.6} x={45}>
                <p className="text-blue ">Like:</p>
                <p className=" ">Shostakovich</p>
                <p className=" ">Entartete Musik</p>
                <p className="mb-2 ">Internet Culture</p>
              </FadeIn>
              <FadeIn delay={2.9} x={50}>
                <p className="text-gray ">Genre:</p>
                <p className=" ">Contemporary</p>
                <p className=" ">Chamber Rock</p>
                <p className=" ">Free Improvisation</p>
              </FadeIn>
            </div>
          </div>
        </div>
        <FadeIn y={10} duration={2} delay={3.2}>
          <div className="flex justify-center items-center pb-20 text-4xl">
            <div className="mr-5">
              <Link href={"https://twitter.com/makotobassoon"} target="blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </div>
            <div className="mr-5">
              <Link
                href={"https://www.instagram.com/mojaamojaaamojaaaa/"}
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
            <div className="">
              <Link
                href={
                  "https://www.youtube.com/channel/UCc1M3xcBBL8BofSsQaX16sg"
                }
                target="blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
}
