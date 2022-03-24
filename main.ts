import { buildDirs } from "./dirs";
import { writeFiles } from "./files";

async function main(): Promise<void> {
  // Build Folders
  await buildDirs(["test1", "test1/again1", "test1/again2", "test2", "test3"]);

  // Build Files
  await writeFiles(["test1/again1", "test1/again2", "test2", "test3"]);
}

main();
