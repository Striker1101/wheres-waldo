import ps3 from "../media/weldo1.jpg";
import ps4 from "../media/ps4.jpg";
import x360 from "../media/x360.jpg";
import tor from "../media/tortoise.jfif";
import ghost from "../media/ghost.jfif";
import tobi from "../media/tobi.png";
import master_gie from "../media/master_gie.jfif";
import werewolf from "../media/werewolf.jfif";
import robin_hood from "../media/robin_hood.jfif";
import cowboy_scare from "../media/cowboy_roland.jfif";
import spiderman from "../media/spider_man.jfif";
import god_of_war from "../media/god_of_war.jfif";
import { writeUserData, receive } from "./firebase";

const links = [
  {
    id: 0,
    name: "sega",
    img: ps3,
    charc: [
      { img: tor, cord: [297, 298], name: "tortoise" },
      { img: ghost, cord: [430, 458, 429, 457], name: "ghost" },
      { img: tobi, cord: [319, 320, 347, 348], name: "tobi" },
    ],
  },
  {
    id: 1,
    name: "X360",
    img: x360,
    charc: [
      { img: master_gie, cord: [297, 298], name: "master gie" },
      { img: robin_hood, cord: [289, 288], name: "robin hood" },
      { img: werewolf, cord: [401], name: "werewolf" },
    ],
  },
  {
    id: 2,
    name: "ps4",
    img: ps4,
    charc: [
      { img: god_of_war, cord: [353, 354, 352, 382], name: "God of war" },
      { img: spiderman, cord: [312, 313], name: "spider man" },
      { img: cowboy_scare, cord: [174, 202], name: "cowboy scare" },
    ],
  },
];

export function mountData() {
  writeUserData(links);
}
export function receiveData() {
  return receive();
}
