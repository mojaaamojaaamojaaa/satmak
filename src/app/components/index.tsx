import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animation/FadeIn";

const Index = () => {
  return (
    <div className="flex flex-1 justify-center">
      <FadeIn y={30} x={-50} delay={0.5}>
        <div className="flex flex-wrap -mx-3">
          {/*container top 1*/}
          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707547889/myScoreData/68942849_2371738416480279_2049296396351176704_o_gsmhdd.jpg"
                }
                height={300}
                width={300}
                alt="Hello,I'm makoto sato"
                className="rounded-3xl"
              />
            </div>
            <div className="flex-col justify-center items-center p-3 _square-outline ">
              <p className=" text-green text-lg ">Bassoonist</p>
              <p>Play Contemporary,Free Jazz,Chember Rock</p>
            </div>
          </div>

          {/*container top 2 */}

          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707543067/myScoreData/tvv_ivl4zq.png"
                }
                height={300}
                width={300}
                alt="YouTube Link Here!"
              />
            </div>
            <div className="flex-col justify-center items-center p-3  _square-outline ">
              <p className="text-red text-lg">YouTube</p>
              <p>Live Footage,Sheet Music,Video Works</p>
            </div>
          </div>

          {/*container 1*/}
          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707571639/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A_ife0kd.png"
                }
                height={300}
                width={300}
                alt="Hello,I'm Moja"
              />
            </div>
            <div className="flex-col justify-center items-center p-3 _square-outline ">
              <p className="text-blue text-lg ">Composer</p>
              <p>Mainly Piano Music in classical style.</p>
            </div>
          </div>
          {/*container 2*/}
          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707545244/myScoreData/ba-namu_oqjeio.png"
                }
                height={300}
                width={300}
                alt="Hello,I'm Moja"
              />
            </div>
            <div className="flex-col justify-center items-center p-3 _square-outline">
              <p className="text-yellow text-lg">Purugatorio</p>
              <p>Chember Rock band</p>
              <p>please Wait Info</p>
            </div>
          </div>
          {/*container 3*/}
          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707574998/k4462h_njno2u.jpg"
                }
                height={300}
                width={300}
                alt="Hello,I'm Moja"
              />
            </div>
            <div className="flex-col justify-center items-center p-3 _square-outline ">
              <p className="text-lg text-purple-400">Sheet</p>
              <p className="text-gray">
                Please wait until the service begins{":>"}
              </p>
            </div>
          </div>
          {/*container 4*/}
          <div className="flex justify-center items-center w-full md:w-1/2 ">
            <div className="flex justify-center items-center p-3 ">
              <Image
                src={
                  "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707547993/character/hakasebassoon_mebgac.png"
                }
                height={300}
                width={300}
                alt="Hello,I'm Moja"
                className=" rounded-3xl "
              />
            </div>
            <div className="flex-col justify-center items-center p-3 _square-outline ">
              <p className="text-lg text-stone-600 ">Contact</p>
              <Link href={"/contact"}>
                <p className=" underline text-blue ">Click Here!</p>
              </Link>
              <p>Feel free to contact me!</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Index;
