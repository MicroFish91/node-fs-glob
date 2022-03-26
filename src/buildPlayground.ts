import {
  buildDirs,
  removeFilesAndDirs,
  writeRandomizedFiles,
  writeStdFiles,
} from "./fs_tools";

async function build(): Promise<void> {
  // Remove Dirs
  await removeFilesAndDirs();

  // Build Dirs - Standardized
  await buildDirs([
    "std",
    "std/test1",
    "std/test1/again1",
    "std/test1/again2",
    "std/test2",
    "std/test3",
  ]);

  // Build Dirs - Randomized
  await buildDirs([
    "randomized",
    "randomized/test1",
    "randomized/test1/again1",
    "randomized/test1/again2",
    "randomized/test2",
    "randomized/test3",
  ]);

  // Build Files
  await writeRandomizedFiles([
    "randomized/test1",
    "randomized/test1/again1",
    "randomized/test1/again2",
    "randomized/test2",
    "randomized/test3",
  ]);

  await writeStdFiles();

  console.log("Success!");
}

build();
