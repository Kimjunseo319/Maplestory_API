const cheerio = require("cheerio");

const request = require("./libs/request");
const utils = require("./libs/utils");

let user = (module.exports = {});

user.infoType = {
  rank: "/Ranking",
  common: "",
  equipment: "/Equipment",
  inventory: "/Inventory",
  storage: "/Storage",
  collection: "/Collection",
  skill: "/Skill",
  riding: "/Riding",
  quest: "/Quest",
  pet: "/Pet",
  guild: "/Guild",
};

user.getUser = function (username, param, infoType = infoType.rank) {
  console.log("파람 있는거 " + param);
  //request.get("/Common/Character/Detail/" + username + infoType + "?p=" + param);
};

user.getUser = function (username, infoType = infoType.rank) {
  console.log("파람 없는거");
  //request.get("/Common/Character/Detail/" + username + infoType + "?p=");
};
