//ハングマンの描画は全てcssのborderで描画
//以下のconst パーツ名はハングマンの各パーツのinline CSSによる描画。見た目いじる以外はさわらない
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid black",
      borderRadius: "100%",
      position: "absolute",
      top: "50px",
      right: "-20px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "100px",
      border: "6px solid black",
      position: "absolute",
      top: "100px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "40px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "-30px",
      rotate: "-30deg",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "40px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "0px",
      rotate: "30deg",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "40px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "-30px",
      rotate: "30deg",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "40px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "0px",
      rotate: "-30deg",
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

//HangManGame.tsxのincorrectLetters.lengthの数(入力を間違えた回数)
type HangManDrawingProps = {
  numberOfGuesses: number;
};

export function HangManDrawing({ numberOfGuesses }: HangManDrawingProps) {
  return (
    <div className="relative">
      {/*ハングマンのBODY_PARTSを順に表示していく為の処理*/}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/*以下全てハングマンの吊り台の描画の為のCSS。見た目いじる以外は編集不要*/}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "60px",
        }}
      />
      <div
        style={{
          height: "250px",
          width: "10px",
          background: "black",
          marginLeft: "60px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
