import glob from "glob-promise";
import { moveFiles } from "./fs_tools";
import { getByExt, getCwd } from "./glob_tools/basics";

async function main() {
  // test custom glob select
  if (process.argv[2]) {
    // npm run glob "test_playground/std/**/*.js"
    console.log("YOU QUERIED GLOB STRING: ", process.argv[2]);
    const files = await glob(process.argv[2]);
    console.log(files);
  }

  // ------------------
  else {
    let files = await getCwd();
    // console.log(files);

    // Ex. 1
    // Organize
    files = await getByExt(".js");
    console.log(files);
    await moveFiles(files, "test_playground/organized/js");
  }
}

main();
