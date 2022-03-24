import glob from "glob-promise";

async function main() {
  const files = await glob("test_playground/**/*.js");
  console.log(files);
}

main();
