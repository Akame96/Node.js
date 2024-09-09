import * as fs from "node:fs";

fs.writeFile(
  "file-text.txt",'contenuto file',
  { encoding: "utf-8" },
  function (error) {
    if (error) {
      console.error(error);
      return;
    }
    console.log("file scritto con successo!");
  }
);
