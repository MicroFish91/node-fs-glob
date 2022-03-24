import glob from "glob-promise";
import path from "path";

async function main() {
  const files = await glob("test_playground/**/*.js");
  console.log(files);
}

main();
