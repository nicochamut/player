import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
  return [
    {
      name: "Taro",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Alt-J_-_An_Awesome_Wave.png",
      artist: "Alt-j",
      audio:
        "https://ia601406.us.archive.org/26/items/alt-j-taro/alt-j-taro.mp3",

      //"https://mp3.chillhop.com/serve.php/?mp3=15238"
      color: ["#314255", "#306241"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Not the news",
      cover:
        "https://los40es00.epimg.net/los40/imagenes/2019/07/01/musica/1561992435_082014_1561992777_noticia_normal.jpg",
      artist: "Thom Yorke",
      audio:
        "https://ia601503.us.archive.org/26/items/thom-yorke-not-the-news/thom-yorke-not-the-news.mp3",
      color: ["#FE5200", "#0F0B08"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Up On The Ladder",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/A1MwaIeBpwL._SL1500_.jpg",
      artist: "Radiohead",
      audio:
        "https://ia601503.us.archive.org/6/items/up-on-the-ladder/up-on-the-ladder.mp3",
      color: ["#4584C6", "#E3AD1D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "A Fan's Mail (Tron Song Suite II)",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/71tHirocwXL._SX522_.jpg",
      artist: "Thundercat",
      audio:
        "https://ia601405.us.archive.org/8/items/thundercat-a-fans-mail-tron-song-suite-ii/thundercat-a-fans-mail-tron-song-suite-ii.mp3",
      color: ["#74222A", "#5B6970"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Red Room",
      cover:
        "https://yt3.ggpht.com/ytc/AKedOLRA5E_aPOWb0TjHOpxwdOoKa3uGYUMCFeHRrumfoA=s900-c-k-c0x00ffffff-no-rj",
      artist: "Hiatus Kaiyote",
      audio:
        "https://ia601401.us.archive.org/1/items/hiatus-kaiyote-09-red-room/hiatus-kaiyote-09-red-room.mp3",
      color: ["#EE3634", "#90903B"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "This is America",
      cover:
        "https://www.hoyesarte.com/constelac10n/files/2020/05/Childish-Gambino-This-Is-America.jpg",
      artist: "Childish Gambino",
      audio:
        "https://ia601401.us.archive.org/24/items/this-is-america_202109/this-is-america.mp3",
      color: ["#3A3B47", "#92A88F"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Drops",
      cover: "https://m.media-amazon.com/images/I/71BCS8E4kwL._SS500_.jpg",
      artist: "Fernandez 4, Cirilo Fernandez, Aylin Prandi",
      audio: "https://ia601500.us.archive.org/28/items/drops_202109/drops.mp3",
      color: ["#624131", "#B8D1CE"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Goodbye Blue",
      cover:
        "https://s.mxmcdn.net/images-storage/albums5/3/7/0/3/8/8/48883073_500_500.jpg",
      artist: "BADBADNOTGOOD",
      audio:
        "https://ia601401.us.archive.org/4/items/badbadnotgood-goodbye-blue-ft-jonah-yano/badbadnotgood-goodbye-blue-ft-jonah-yano.mp3",
      color: ["#0C202B", "#EBD5E3"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default ChillHop;
