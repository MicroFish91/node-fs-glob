import glob from "glob-promise";

export async function getCwd(): Promise<string[]> {
  // cwd: The current working directory in which to search. Defaults to process.cwd()
  const options = {
    cwd: "../",
  };

  const files = await glob("*", options);
  // console.log("PROCESS - CWD: ", process.cwd());

  return files;
}
