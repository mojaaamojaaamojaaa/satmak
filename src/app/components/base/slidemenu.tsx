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
          </FadeIn>
        </div>
      )}
    </>
  );
};
export default SlideMenu;
