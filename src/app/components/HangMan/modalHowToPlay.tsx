"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./modal.module.css";
//hangmangameの説明ウィンドウの表示。
const ModalHowToPlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  //modalRef外の要素をクリックしたらウィンドウが閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    //modal要素を表示中スクロールが出来ないようにする。
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", handleClickOutside);
    }
    //クリーンアップ
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={`${styles.modal}`}>
          <div ref={modalRef} className="bg-white p-3 border-4  rounded-md ">
            {/* モーダルの内容 */}
            <p className=" text-xl text-center font-bold mb-2 ">あそびかた</p>
            <p className="  text-xs sm:text-sm  text- font-bold  ">
              単語を推測して当てるHangmanというゲームです。
            </p>
            <p className=" text-xs sm:text-sm  font-bold ">
              文字を一字ずつタップして下さい。キーボードで入力も可能です。
            </p>
            <p className=" text-xs sm:text-sm font-bold  ">
              入力した文字が正解の単語に含まれていれば、下線部分に文字が表示されます。
            </p>
            <p className=" text-xs sm:text-sm font-bold  ">
              1回間違えるとHangmanの体のパーツが表示され、
              絵が完成する(6回間違える)とゲームオーバーです。
            </p>
            <details className="text-red-600 mt-1 text-xs sm:text-sm font-bold ">
              <summary>その他ルール</summary>
              <li>
                アルファベットの26文字(a-z)以外の記号や文字は使いません。ウムラウトなどの付加記号を使う単語は省いています。例外として、i
                を一世の意味で用いるている場合があります。
              </li>
              <li>
                スコアは正解すると+1点、間違えると-1点されます。それ以外の計算はありません。ある程度の点数をとれた場合、特に特典はありませんが称号を差し上げます。
              </li>
              <li>
                クラシック音楽に関連するモノや用語、人名、団体など、ありとあらゆる単語が出てきます。
              </li>
            </details>
            <details className="mt-1 text-xs sm:text-sm font-bold ">
              <summary>hint</summary>
              <li>
                称号を得るためにはキーボード入力推奨です。
                Enterキーでも次の問題へ進めます。
              </li>
              <li>とりあえず、１０問正解を目指しましょう！</li>
              <li>よく見ると区切りの空白部分が分かります。</li>
            </details>
            <details className="mt-1 text-xs sm:text-sm font-bold ">
              <summary>おまけ</summary>
              <li>
                出題範囲:作曲家【6割くらい占めてるかも】,音楽理論,指揮者,ピアニスト,オーケストラ,音楽学者,楽器etc...
              </li>
            </details>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black text-white p-2 rounded-md "
          >
            あそびかた
          </button>
        </div>
      )}
    </>
  );
};

export default ModalHowToPlay;
