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
      <FadeInRotate x={-200} y={-300} rotate={-361} delay={0.5} duration={1.5}>
        <div className="text-xl  sm:text-3xl text-center mt-5 ">
          <p className="text-green">Bassoon Player</p>
          <p className="text-red">Composer</p>
          <p className="text-green">Keyboard Player</p>
        </div>
      </FadeInRotate>
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
