"use client";
import { useCallback, useEffect, useState } from "react";
import words from "./hangmanWordsDataversion1.json";
import { HangManDrawing } from "./HangManDrawing";
import { HangManWord } from "./HangManWord";
import { Keyboard } from "./Keyboard";

//wordlist.jsonから正解の単語をランダムに取得
function getWord() {
  return words[Math.floor(Math.random() * words.length)]; //jsonのデータから正解を一つセットする
}

//正解数に応じてコメントを表示させるための関数
function messageOfWinCount(winCount: number) {
  if (winCount === 0) {
    return "レッツトライ！";
  } else if (winCount > 0 && winCount <= 3) {
    return "まだまだ序盤です！";
  } else if (winCount > 3 && winCount <= 6) {
    return "その調子です！";
  } else if (winCount > 6 && winCount <= 9) {
    return "すごい！";
  } else if (winCount > 9 && winCount <= 20) {
    return "良いかんじです！";
  } else if (winCount > 20 && winCount <= 50) {
    return "`称号:クラシック博士";
  } else if (winCount > 50 && winCount <= 99) {
    return "称号:黒帯";
  } else if (winCount > 99 && winCount <= 200) {
    return "称号:クラシックマニア";
  } else if (winCount > 200 && winCount <= 299) {
    return "称号:クラシックマスター";
  } else if (winCount === 300) {
    return "称号:Maestro";
  } else {
    return "称号:達人";
  }
}

export default function HangManGame() {
  const [wordToGuess, setWordToGuess] = useState<string>("TestDesu"); //正解の単語の設定。空文字だと初期状態でisWinの判定がtrueを返す為空文字ではなくダミーの単語を入れている。
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); //正解の文字を入れる為の配列
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false); //gameの開始を管理
  const [winCount, setWinCount] = useState(0); //正解数をカウント

  //ゲームの開始状態の管理。
  const startGame = () => {
    setWinCount(0); //スコアの表記に用いる
    setGuessedLetters([]); //ユーザーが入力した文字を配列で管理
    setWordToGuess(getWord()); //取得したgetWordを管理する配列
    setIsGameStarted(true); //ゲームが始まったら<HangmanWord>と<keyboard>コンポーネントをを表示させる。
  };

  //ゲームの終了ボタンを押したときの初期化処理
  const endGame = () => {
    setGuessedLetters([]);
    setWordToGuess("");
    setIsGameStarted(false);
  };

  //入力した文字がwordToGuessに含まれていない場合、incorrectLettersの配列に入れる
  const incorrectLetters: string[] = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  //勝敗判定 6個以上 incorrectLettersの配列に入ったらisLoseがtrueになる
  const isLose: boolean = incorrectLetters.length >= 6;
  const isWin: boolean = wordToGuess
    .split("") //wordToGuessを一文字ずつ分解
    .every((letter) => letter === " " || guessedLetters.includes(letter)); //guessedLettersの配列の要素がすべて一致しているときにのみtrueを返す(勝利の判定)

  //入力した正解の文字を順に配列へ入れる関数をメモ化
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLose || isWin) return; //配列に既にある文字と勝敗の判定が終わっている(True)場合は何もしない
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWin, isLose]
  );

  //キーボードの入力を受け付ける為のuseEffectを使用した処理
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return; //a-zで入力しないと解答を受け付けない
      e.preventDefault();
      addGuessedLetter(key); //addGuessedLetterに入力した文字を渡す。
    };

    document.addEventListener("keypress", handler); //改善するかも？現在画面開いてkeyboard押せばすぐに反応する状態 <- 直した
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]); //guessedLetterの配列に変化があった時のみ再処理

  //勝敗判定後、正解のワードを再設定する処理をuseCallbackでメモ化
  const initGame = useCallback(() => {
    setWordToGuess(getWord());
    setGuessedLetters([]);
  }, []);

  //useEffectでカウント数を管理。ゲーム中以外は計算が行われないようにしている。正解で一点、間違えると1点マイナス。
  useEffect(() => {
    if (isWin && isGameStarted) {
      setWinCount(winCount + 1);
    } else if (isLose && isGameStarted && winCount > 0) {
      setWinCount(winCount - 1);
    }
  }, [isWin, isGameStarted, isLose]); //winCountはtrueの限り無限に数が増えてしまうので依存させない

  useEffect(() => {
    //isWinかisLoseの判定がtrueの状態の時エンターキーでゲームを初期化する、
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Enter" && (isWin || isLose)) {
        e.preventDefault();
        initGame();
      }
    };

    document.addEventListener("keypress", handler);
    //クリーンアップ
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [initGame, isWin, isLose]);

  return (
    <div className=" flex-col  justify-center items-center space-y-6 ">
      {/* start game か end gameによってボタンの文字と処理が変化*/}
      <div className="mt-5 text-center">
        {!isGameStarted ? (
          <button
            onClick={startGame}
            className="bg-black   text-white  w-20 p-2  "
          >
            Start
          </button>
        ) : (
          <button onClick={endGame} className="bg-black text-white  w-20 p-2">
            End
          </button>
        )}
      </div>
      <div className="flex justify-center">
        {/*ハングマンの絵の描写のコンポーネント*/}
        <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      </div>
      {isGameStarted && (
        /*勝敗の結果を表示する。最初は表示されていない。ここから↓ */
        <div className="text-center">
          {isWin && (
            <p className="text-sm text-center text-red-600 font-bold ">
              正解！
            </p>
          )}
          {isWin && (
            <button
              onClick={initGame}
              className="text-sm bg-blue text-center text-white bg-red-600 rounded-md mt-1 p-2 "
            >
              もういっちょ
            </button>
          )}
          {isLose && (
            <p className="text-sm text-center text-black font-bold">残念！</p>
          )}
          {isLose && (
            <button
              onClick={initGame}
              className="text-sm bg-red text-center text-white bg-blue-600 rounded-md mt-1 p-2 "
            >
              もっかい
            </button>
          )}
        </div>
        /*ここまで↑勝敗の結果を表示 */
      )}
      <div className="flex justify-center">
        {/*単語を表示するコンポーネント*/}
        {isGameStarted && (
          <HangManWord
            reveal={isLose}
            win={isWin}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
        )}
      </div>
      <div className=" flex justify-center items-center" style={{ flex: 4 }}>
        {/*画面上のキーボードを表示するコンポーネント*/}
        {isGameStarted && (
          <Keyboard
            disabled={isWin || isLose}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        )}
      </div>
      <div className="text-sm font-bold text-center ">
        <p>
          スコア:{winCount}点 {messageOfWinCount(winCount)}
        </p>
      </div>
    </div>
  );
}
