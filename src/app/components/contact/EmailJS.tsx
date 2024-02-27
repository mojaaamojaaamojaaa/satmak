import { init } from "emailjs-com";
//EmailJSの初期化と環境変数の設定をエクスポートするためのファイル
const config = {
  userId: process.env.NEXT_PUBLIC_USER_ID,
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
};
//環境変数がすべて定義されているかチェック
if (
  config.userId !== undefined &&
  config.serviceId !== undefined &&
  config.templateId !== undefined
) {
  init(config.userId); //初期化
}

export const emailjsConfig = config;
