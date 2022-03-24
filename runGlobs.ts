import { getByExt, getCwd } from "./glob_tools/basics";

async function main() {
  let files = await getCwd();
  // console.log(files);

  // Organize
  files = await getByExt(".js");
  console.log("JS Files Globbed: ", files);
}

main();
