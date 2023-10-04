import fs from "fs";
import split2 from "split2";

fs.createReadStream("test.txt")
  .pipe(split2())
  .on("data", function (line) {
    console.log("line ", line);
    //each chunk now is a separate line!
  });
