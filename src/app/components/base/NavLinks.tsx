import Link from "next/link";
import FadeIn from "../animation/FadeIn";

const links = [
  { name: "PROFILE", href: "/profile" },
  { name: "WORKS", href: "/works" },
  { name: "SPECIAL", href: "/special" },
  { name: "CONTACT", href: "/contact" },
];
//リンククリック時にスライドメニューを閉じる関数を追加
type onLinkClick = {
  onLinkClick?: () => void;
};

const NavLinks: React.FC<onLinkClick> = ({ onLinkClick }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <FadeIn key={index}>
            <Link
              href={link.href}
              className="flex sticky items-center justify-start p-3 lg:p-0 mb-4 lg:mb-0 gap-3 text-yellow lg:text-blue text-xl lg:text-base z-50 hover:opacity-80"
            >
              <li
                onClick={onLinkClick}
                className={`cursor-pointer list-none ml-0 lg:ml-4  `}
              >
                {link.name}
              </li>
            </Link>
          </FadeIn>
        );
      })}
    </>
  );
};
export default NavLinks;
