import NavLinks from "./NavLinks";
import Link from "next/link";
import { useSlideMenu } from "./context/SlideMenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import FadeIn from "../animation/FadeIn";

const SlideMenu = () => {
  const { isOpen, handleToggleMenu } = useSlideMenu();
  return (
    <>
      {/*isOpenがtrueの時のみ表示 */}
      {isOpen && (
        <div className="m-5 flex-col">
          {/*Menu Area */}
          <FadeIn delay={1}>
            <div className="cancelButton flex justify-start ">
              <ul>
                <Link href={"/"}>
                  <button
                    onClick={() => handleToggleMenu()}
                    className="mb-10 text-4xl ml-3 text-orange"
                  >
                    Home
                  </button>
                </Link>
                <NavLinks onLinkClick={() => handleToggleMenu()} />
              </ul>
            </div>
            {/*Logo Area*/}
            <div className="flex justify-center text-4xl my-5  md:my-20 lg:my-48">
              <Link
                href={
                  "https://www.youtube.com/channel/UCulME1KPy5ul3eg6S4sAs4w"
                }
                target="blank"
              >
                <FontAwesomeIcon icon={faYoutube} className="mr-10 text-red" />
              </Link>
              <Link href={"https://twitter.com/CMusicJunkies "} target="blank">
                <FontAwesomeIcon icon={faXTwitter} className="text-slate-300" />
              </Link>
            </div>
          </FadeIn>
        </div>
      )}
    </>
  );
};
export default SlideMenu;
