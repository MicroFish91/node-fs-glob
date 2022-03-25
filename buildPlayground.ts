import { buildDirs, removeFilesAndDirs, writeFiles } from "./fs_tools";

async function build(): Promise<void> {
  // Remove Dirs
  await removeFilesAndDirs();

  // Build Dirs
  await buildDirs(["test1", "test1/again1", "test1/again2", "test2", "test3"]);

  // Build Files
  await writeFiles(["test1", "test1/again1", "test1/again2", "test2", "test3"]);
}

build();
