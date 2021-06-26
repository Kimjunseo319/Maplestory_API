const cheerio = require("cheerio");

const request = require("./libs/request");
const utils = require("./libs/utils");

let rank = (module.exports = {});

rank.mapleworld = {
  all: 0,
  reboot1: 1,
  reboot2: 2,
  aurora: 3,
  red: 4,
  enosis: 5,
  union: 6,
  scania: 7,
  luna: 8,
  zenith: 9,
  croa: 10,
  vera: 11,
  elysium: 12,
  arcane: 13,
  nova: 14,
  burning1: 15, //only event [error warning!]
  burning2: 16, //only event [error warning!]
  rebootall: 254,
};

/**
 * 특정 유저의 월드 랭킹을 가져옵니다
 * @param {string} username 유저 이름
 * @param {mapleworld} world 월드
 */
rank.getUserWorldRank = function (username, world = mapleworld.all) {
  return new Promise((res, rej) => {
    request.get("/Ranking/World/Total?c=" + encodeURI(username) + "&w=" + world).then((data) => {
      try {
        const $ = cheerio.load(data);
        const $char = $(".search_com_chk")[0];
        const result = {
          rank: $char.children[1].children[1].children[0].data,
          changesRank: $char.children[1].children[3].children[1].children[4].data,
          playerPage: "https://maplestory.nexon.com" + $char.children[3].children[3].children[1].children[0].attribs["href"],
          username: $char.children[3].children[3].children[1].children[0].children[1].data,
          job: $char.children[3].children[3].children[3].children[0].data,
          playerImage: $char.children[3].children[1].children[1].attribs["src"],
          level: $char.children[5].children[0].data,
          exp: $char.children[7].children[0].data,
          popularity: $char.children[9].children[0].data,
        };
        res(utils.removeObjectSpace(result));
      } catch (err) {
        rej(err);
      }
    });
  });
};

/*
    var condition = {"page":1,"c":"캐릭터이름","j":255,"d":255,"w":8,"t":255,"n":null,"g":255,"k":null};
    page - 페이지
    c - 캐릭터 이름
    j - 직업
    d - 직업 디테일(전직) 전체 전직을 볼 경우 null
    w - 월드
    t - ???
    n - ???
    g - 업적 랭킹 등급 / 전체 0, 브론즈 6 그 후로 하나씩 감소
    k - ???
*/
