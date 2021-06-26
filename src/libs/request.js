const https = require("https");

let request = (module.exports = {});

request.get = function (path) {
  const option = {
    hostname: "maplestory.nexon.com",
    path: path,
  };
  console.log(option.hostname + option.path + "요청을 처리하였습니다!");
  return new Promise((res, rej) => {
    https.get(option, (response) => {
      let rawData = "";
      response.setEncoding("utf-8");
      response.on("data", (data) => {
        rawData += data;
      });
      response.on("end", () => {
        res(rawData);
      });
    });
  });
};
