import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function Page() {
  const state = Flip.getState(".squares");

  Flip.from(state, { duration: 2, ease: "power1.inOut" });

  return (
    <div>
      <div className="squares">
        <p>i am looking for the seeling</p>
      </div>
    </div>
  );
}
