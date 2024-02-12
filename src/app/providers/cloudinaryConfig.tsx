import { ReactNode, createContext, useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

/*
将来的に利用するつもり or 別のところでも使えるプロバイダー
コレクションページ等で画像を大量にあげる予定

使い方 任意のページまたはコンポーネントに以下のとおり記述
import { useContext } from 'react';
import CloudinaryContext from 'sample/contexts/CloudinaryContext';
import { AdvancedImage } from '@cloudinary/react';

const Page = () => {
  const cld = useContext(CloudinaryContext);

  const myImage = cld.image('sample_image'); image idのみで画像表示できる。

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default Page;
*/

//Cloudinaryのインスタンスを作成
const cld = new Cloudinary({
  cloud: {
    cloudName: "dgcbaydpp", //ここにuser nameを記入
  },
});

//Cloudinaryのコンテキストを作成
const CloudinaryContext = createContext<Cloudinary | null>(null);

interface CloudinaryProviderProps {
  children: ReactNode;
}

//CloudinaryContextプロバイダーの作成
export const CloudinaryProvider: React.FC<CloudinaryProviderProps> = ({
  children,
}) => {
  return (
    <CloudinaryContext.Provider value={cld}>
      {children}
    </CloudinaryContext.Provider>
  );
};

//コンテキストを使用するためのhook
export const useCloudinary = () => {
  return useContext(CloudinaryContext);
};

export default cld;
