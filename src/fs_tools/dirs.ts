import * as fse from "fs-extra";
import path from "path";
import { FILE_EXTENSIONS, ROOT_DIR } from "./constants";

export async function buildDirs(dirs: string[]): Promise<void> {
  await fse.ensureDir(path.join(ROOT_DIR, "test_playground"));

  for (const EXT of FILE_EXTENSIONS) {
    await fse.ensureDir(
      path.join(ROOT_DIR, "test_playground", "organized", EXT.slice(1))
    );
  }

  for (let dir of dirs) {
    dir = path.join(ROOT_DIR, "test_playground", dir);

    // CHMOD 2775
    // const desiredMode = 0o2775;
    // const options = {
    //   mode: desiredMode,
    // };

    try {
      await fse.ensureDir(dir);
    } catch (err) {
      console.error(err);
    }
  }
}

export async function removeFilesAndDirs(): Promise<void> {
  try {
    await fse.remove(path.join(ROOT_DIR, "test_playground"));
  } catch (err) {
    console.log(err);
  }
}
