import styles from "./keyboard.module.css";
//主にスマホで使用する際に使用するキーボードコンポーネント
//KEYS -> TODO 絶対他に良い書き方がある↓
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean; //isWinかisLoseがtrueの判定の時、一度選択した文字を入力不可にする
  activeLetters: string[]; //正しい選択をした場合黒色に変化し入力不可にする
  inactiveLetters: string[]; //誤った選択をした場合薄い灰色に変化して入力不可にする
  addGuessedLetter: (letter: string) => void; //このコンポーネントで入力した文字をGuessedLetter配列に入れる為の関数
};

export function Keyboard({
  disabled = false,
  activeLetters, //
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,minmax(75px,1fr))",
          gap: ".5rem",
        }}
      >
        {/*キーボードのボタンの表示とボタン処理 */}
        {KEYS.map((key) => {
          /*選択した単語を各配列に入れる */
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              } `}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
