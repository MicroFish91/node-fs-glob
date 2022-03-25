import { moveFiles } from "./fs_tools";
import { getByExt, getCwd } from "./glob_tools/basics";

async function main() {
  let files = await getCwd();
  // console.log(files);

  // Ex. 1
  // Organize
  files = await getByExt(".js");
  await moveFiles(files, "test_playground/organized/js");
}

main();
