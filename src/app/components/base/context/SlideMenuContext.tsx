"use client";
import {
  createContext,
  useState,
  useContext,
  useRef,
  RefObject,
  useCallback,
} from "react";
import gsap from "gsap";

//NavBarとSlideMenu内で頻出するトグル関数と状態の管理の為のコンテクスト
interface SlideMenuContextType {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement>;
  handleToggleMenu: () => void;
}
//exportされる際のdefault値
const defaultContextValue: SlideMenuContextType = {
  isOpen: false, //スライドメニューがひらいているか
  menuRef: { current: null }, //divを参照する
  handleToggleMenu: () => {}, //isOpenのトグルとアニメーション
};

const SlideMenuContext =
  createContext<SlideMenuContextType>(defaultContextValue);

export const useSlideMenu = () => useContext(SlideMenuContext);

interface SlideMenuProps {
  children: React.ReactNode;
}

//RootLayoutのNavメニューにwrap
export const SlideMenuProvider: React.FC<SlideMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  //スライドメニューのアニメーション
  const animateSlideMenu = useCallback((open: boolean) => {
    gsap.to(menuRef.current, {
      x: open ? "0%" : "100%",
      autoAlpha: open ? 1 : 0,
      ease: "power3.inOut",
      duration: 1,
    });
  }, []);

  //ボタンクリック時にメニュー開閉をtoggleする関数
  const handleToggleMenu = useCallback(() => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    animateSlideMenu(newIsOpen); //isOpenのみで状態管理すると初回レンダリング時にバグるのでボタン押したときのみにアニメーションを作動させる
  }, [isOpen, animateSlideMenu]);

  return (
    <SlideMenuContext.Provider value={{ isOpen, menuRef, handleToggleMenu }}>
      {children}
    </SlideMenuContext.Provider>
  );
};
