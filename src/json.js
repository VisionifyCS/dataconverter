const fs = require("fs");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();

fs.readFile("test.xml", (err, data) => {
  parser.parseString(data, (err, results) => {
    console.log(JSON.stringify(results, false, null, true));
  });
});
