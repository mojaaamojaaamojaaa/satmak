import Image from "next/image";
import FadeInRotate from "../animation/FadeInRotate";
import FadeIn from "../animation/FadeIn";

const Profil = () => {
  return (
    <div className="mx-5 my-2 ">
      <div className="text-red  mt-10 text-center ">
        <FadeInRotate rotate={360} x={100} y={200} duration={1}>
          <span className="md:text-4xl text-3xl">PROFILE</span>
        </FadeInRotate>
      </div>
      <FadeIn x={200} delay={1.1} duration={3}>
        <div className="flex justify-center">
          <Image
            src={"/images/me.png"}
            height={300}
            width={300}
            alt="satmak"
            className="rounded-md mt-5  lg:mt-20 justify-center "
          />
        </div>
      </FadeIn>
    </div>
  );
};
export default Profil;
