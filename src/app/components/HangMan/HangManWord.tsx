"use client";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

//入力した文字を表示する部分のComponent
//HangManGameから渡される引数の型の定義
type HangManWordProps = {
  guessedLetters: string[]; //正解の文字を入れる為の配列
  wordToGuess: string; //正解の単語の設定。
  reveal?: boolean; //６回間違えた場合isLoseの結果がTrueに変化し、revealもTrueになる）
  win?: boolean; //isWinの判定
};

export function HangManWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
  win = false,
}: HangManWordProps) {
  const [copied, setCopied] = useState(false); //ボタン操作でclipboardに単語をコピーする機能の実装 copiedがtrueになった時にボタンの文字を変化させる。
  const [textToCopy, setTextCopy] = useState(""); //ボタン操作でclipboardに単語をコピーする機能の実装 npmのCopyToClipboardを利用
  useEffect(() => {
    //div要素のtextContentを取得
    const divElement = document.getElementById("wordDiv") as HTMLDivElement; //表示されたwordToGuessをコピー
    const text = divElement.textContent || ""; //空文字でerror避け
    setTextCopy(text.toLowerCase());
  }, [wordToGuess]); //大文字でwordToGuessは表示されるため小文字に変えてクリップボードにコピー
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); //2秒後にボタンの表記のリセット
  };

  return (
    /*入力した文字の設定。文字のサイズが均一で見た目でヒントにならないためfontはmonospace一択*/
    <div
      style={{ textTransform: "uppercase", fontFamily: "monospace" }}
      className=" "
    >
      {(win || reveal) && (
        <div className="flex justify-end px-1 md:px-0  ">
          <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
            <button className="text-white bg-black font-bold rounded-md  py-0.5 px-1 ">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
      <div
        id="wordDiv"
        className="flex flex-wrap  justify-center px-10  md:px-5  gap-1  text-lg md:text-4xl font-bold "
      >
        {/*文字の表示はCSSのvisibilityで制御*/}
        {wordToGuess.split("").map((letter, index) => (
          <span className=" border-solid border-b-4 border-black " key={index}>
            <span
              style={{
                /*入力した文字が正解の単語に含まれているか、revealがtrueの場合文字が表示される*/
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                /*６回間違えた後、正解の単語が表示された時に予想できなかった単語が赤で表示される*/
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
