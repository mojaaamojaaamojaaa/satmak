"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import Link from "next/link";
import AlbumImages from "@/app/components/works/albumImages";
import { bassoonAlbums, pianoAlbums } from "../../components/works/albums";
import FadeIn from "@/app/components/animation/FadeIn";

export default function Page() {
  useEffect(() => {
    //背景色を変化させるアニメーション
    gsap.to(document.body, {
      backgroundColor: "#2b5549", //変更したい色
      duration: 0.8,
      ease: "power3.in",
    });

    //アンマウントされる時に背景色を元に戻す
    return () => {
      gsap.to(document.body, {
        backgroundColor: "#ece5d3",
        duration: 0.5,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <FadeIn delay={1.5}>
      <div className="p-5  min-h-screen text-white  ">
        <div>
          <p className="text-3xl ">制作物について</p>
        </div>
        <div className="m-5">
          <h4 className="text-orange">このポートフォリオサイト</h4>
          <Link
            href="https://github.com/mojaaamojaaamojaaa/satmak"
            target="blank"
            className=" underline-offset-2"
          >
            github
          </Link>
          <h5 className="m-1 text-yellow ">詳細</h5>
          <p>
            現在エンジニアとしての功績がないので、フリーランスの頃(８年程前)の自分のポートフォリオのページを現代版にアップデートさせるという意識で一から作り直した。今後は大方のデザインは変えずに、新たにエンジニアとしてのポートフォリオのサイトを作成できるように、PrismaのようなCMSサービスとの連携でブログ機能をつけるよう考えている。
          </p>
          <h5 className="m-1 text-yellow ">開発の経緯</h5>
          <p>
            フリーランスの頃に知っていたweb開発のやり方が現在では全く違うことを知り、そのギャップを埋めるため、また、現代の開発技術やＩＴ企業が提供するサービスや考え方(DevOps等)を知るために自分のページを作成した。ReactとVueを9月ごろ、Next.jsを10月頃に知り、エンジニアを目指すうえで学習量は多いものの、フロントとサーバーサイドの技術を基本から両方学べると感じてReact、NextJSを選択した。app
            routerやserver
            action等NextJS独自の機能などが初心者にとっては難解だったため遠回りになってしまったが、結果的にサーバーサイド技術への関心が高まり、将来的には理解して扱えるようになりたいと考えている。
          </p>
        </div>
        <div className="m-5">
          <h4 className="text-orange">
            指定したHTMLElementに含まれる文字列を抽出するスクリプト
          </h4>
          <Link
            href="https://github.com/mojaaamojaaamojaaa/py_files"
            target="blank"
            className=" text-"
          >
            github
          </Link>
          <h5 className="m-1 text-yellow ">詳細</h5>
          <p>
            指定したHTML要素のタグから文字列を取得して、JSONデータのコード規約に合致するよう整形し、JSONファイルを作成し保存するスクリプト。Wikipediaでの使用を想定して作成した。取得したいページurlと指定したHTMLElementを入力するとHTML要素内の文字列を取得する。現在ファイルに直接編集している状態なので、今後はさらに使いやすいように引数でURLとHTML要素を渡す機能の実装と、型定義を行い、他のファイルに利用する際に開発しやすいスクリプトを作成する。
          </p>
          <h5 className="m-1 text-yellow ">開発の経緯</h5>
          <p>
            自分のポートフォリオサイトに実装している「与えられた文字数から単語を推測するゲーム」を制作する際に、ゲーム性を高める上で手入力では膨大な時間がかかる大量の単語のリストが必要になった為。
          </p>
        </div>
        <div className="m-5">
          <h4 className="text-orange">Nostrプロトコルを利用したbotの作成</h4>
          <Link
            href="https://github.com/mojaaamojaaamojaaa/prog_monster_nostr_bot"
            target="blank"
          >
            github
          </Link>
          <h5 className="m-1 text-yellow ">詳細</h5>
          <p>
            github
            actionsを用いて６時間に一回画像を投稿するbot。自身に来たリプライに返信も可能。botとしての基本的な機能は備えているので現在の個人的なbotから、別の実用的なサービスを開発する際に応用できるように機能をなるべく分けて管理、開発が容易になるよう心がけている。また、githubに公開しているため、なるべくわかりやすくJSDocsを利用するなどして他人が見てもわかりやすい設計を心がけた。
          </p>
          <h5 className="m-1 text-yellow ">開発の経緯</h5>
          <p>
            第一に、Nostrという制約が殆どなくSNSとしても利用できるプロトコルに興味を持ったため。第二に、今まで個人で開発を行ってきたが、今後のキャリアを考慮すると、チームでの開発を想定して開発する能力が必要だと感じたため。コメントコーディングを用いながら一から設計した。今後はnostrプロトコル以外のSNSサービスに連携できる機能をつける予定。
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

/*
 <div className=" ">
          <p className="text-3xl ">Works</p>
        </div>
        <div className="m-5 text-2xl">
          <h2 className="text-orange">Bassoon</h2>
        </div>
        <div className="flex justify-center m-5 ">
          <div className="text-xl text-center ">
            <p>bassoon works</p>
            <div className="m-3 text-lg">
              <span className="mr-2">bandcamp :</span>
              <Link href="https://mojaaamojaaa.bandcamp.com/">
                <FontAwesomeIcon
                  icon={faBandcamp}
                  className="text-blue text-xl "
                />
              </Link>
            </div>
            <AlbumImages albums={bassoonAlbums} albumCategory="bassoon" />
          </div>
        </div>
        <div className="m-5 text-2xl">
          <h2 className="text-orange">Classical Music</h2>
        </div>
        <div className="flex justify-center m-5 ">
          <div className="text-xl text-center ">
            <p>piano works</p>
            <div className="m-3 text-lg">
              <span className="mr-2">YouTube :</span>
              <Link href="https://youtube.com/playlist?list=PLMqT9Hcz99gX-LjF05-XLJMJjsr9DXcpW&si=Tv3bmX1kMwZI8X_E">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-red text-xl "
                />
              </Link>
            </div>
            <AlbumImages albums={pianoAlbums} albumCategory="piano" />
          </div>
        </div>
 */
