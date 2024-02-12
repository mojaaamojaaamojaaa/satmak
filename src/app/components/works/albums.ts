//albumImages componentの引数にアルバム名を入れる。
export interface Album {
  src: string;
  link: string;
  alt: string;
}

export const bassoonAlbums: Album[] = [
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707528252/choppedLogo_cjprsk.png",
    link: "https://mojaaamojaaa.bandcamp.com/album/chopped-session",
    alt: "chopped session",
  },
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707528251/recentlogo_zq7w8e.png",
    link: "https://mojaaamojaaa.bandcamp.com/album/recentreport",
    alt: "recent report",
  },
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707528249/sooeepJake_w6dzmg.png",
    link: "https://mojaaamojaaa.bandcamp.com/album/sooeep",
    alt: "sooeep",
  },
];
//piano
export const pianoAlbums: Album[] = [
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/v1707628780/ba-namu342_v7pbjy.png",
    link: "https://youtu.be/hrsqMfEn9lk?si=UGBUQ2EX3nHwaP_D",
    alt: "contrapunctus vol.1",
  },
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707536677/myScoreData/6_lmhe4b.png",
    link: "https://youtu.be/lGBWySMDiA4?si=901QD3YEdBpHxIGB",
    alt: "contrapunctus vol.2",
  },
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707542461/myScoreData/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A31_uuxuil.png",
    link: "https://youtu.be/HRsDYw-zE2g?si=pqM-Ue5k19ppsCAC",
    alt: "3 cans",
  },
  {
    src: "https://res.cloudinary.com/dgcbaydpp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1707542596/myScoreData/samnetitlyge_ww3r39.png",
    link: "https://youtu.be/bCH45muTsy4?si=mgHT-yVFKEUuRt7c",
    alt: "contrapunctus vol.3",
  },
];
