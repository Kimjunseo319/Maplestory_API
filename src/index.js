/*
Unoffical MapleStory API Library
*/
const rank = require("./rank");
const user = require("./user");
const fs = require("fs");

let maple = (module.exports = {});

maple.rank = rank;
maple.user = user;

rank.getUserWorldRank("베베", rank.mapleworld.all).then((data) => {
  console.log(data);
});
