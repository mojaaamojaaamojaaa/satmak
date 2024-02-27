"use client";
import { useEffect } from "react";
import { lexendZetta } from "@/app/font";
import Link from "next/link";
import styles from "./slideMenu.module.css";
import { useSlideMenu } from "./context/SlideMenuContext";
import NavLinks from "./NavLinks";
import SlideMenu from "./slidemenu";
import MyButton from "../ui/myButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
FontAwesomeIcon;
import { faLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FadeOut } from "../animation/FadeOut";
import FadeIn from "../animation/FadeIn";

const Nav = () => {
  const { isOpen, menuRef, handleToggleMenu } = useSlideMenu(); //slideMenuの状態管理に用いるcontext

  useEffect(() => {
    //SlideBarを開いている間スクロールできないようにする
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    // メニュー外のクリックを検出するハンドラー
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        handleToggleMenu();
      }
    };

    //メニューを閉じる。
    document.addEventListener("mousedown", handleClickOutside); //
    //クリーンアップ
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, menuRef, handleToggleMenu]);

  const SlideMenuButton = () => (
    //slideMenuを開くボタン
    <MyButton
      onClick={() => handleToggleMenu()}
      className={"flex items-center"}
    >
      <FontAwesomeIcon icon={faLeftLong} className="w-8 text-2xl text-yellow" />
    </MyButton>
  );
  //isOpenを基にどちらのanimationコンポーネントを適用するか判断する
  const SlideAnimationComponent = isOpen ? FadeOut : FadeIn;

  const CancelButton = () => (
    //slideMenu内のcancelButton
    <MyButton onClick={() => handleToggleMenu()} className="_cancelButton">
      <FontAwesomeIcon
        icon={faXmark}
        className="mt-4 w-8 text-2xl text-yellow"
      />
    </MyButton>
  );

  //isOpenを基にどちらのanimationコンポーネントを適用するか判断する
  const CancelAnimationComponent = isOpen ? FadeIn : FadeOut;

  return (
    <div className="flex flex-grow bg-inherit border-black border-b-2 pb-0.5 ">
      <div className="flex flex-grow font-bold ">
        <FadeIn>
          <Link href="/">
            <span className={`${lexendZetta.className} no-underline `}>
              satmak
            </span>
          </Link>
        </FadeIn>
      </div>
      {/*デスクトップサイズ*/}
      <ul className=" lg:inline-flex  flex-end text-xl hidden ">
        <NavLinks />
      </ul>
      {/*モバイルディスプレイ以下のサイズでスライドメニューに切り替わる*/}
      <ul className={`inline-flex flex-1 justify-end gap-6 lg:hidden`}>
        <div className="flex-col ">
          <div className="lg:hidden">
            {/*SlideMenuボタンのanimation*/}
            <SlideAnimationComponent
              x={isOpen ? undefined : 30}
              duration={1}
              delay={isOpen ? undefined : 1.5}
              ease={isOpen ? undefined : "elastic.out(1.2,0.8)"}
            >
              <SlideMenuButton />
            </SlideAnimationComponent>
            {/*SlideMenuのガワとキャンセルボタン*/}
            <div
              ref={menuRef}
              className={`${styles.slideMenu} opacity-0 bg-blue top-0 right-0 sm:w-80 z-50`}
            >
              {/*Cancel Button*/}
              <div className="flex justify-end m-3 sm:m-4">
                {/*Cancelボタンの開閉時のアニメーションをFadeInとFadeOutコンポーネントを使用して制御*/}
                <CancelAnimationComponent delay={isOpen ? 2 : undefined}>
                  <CancelButton />
                </CancelAnimationComponent>
              </div>
              {/*スライドメニューの中身*/}
              <SlideMenu />
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
