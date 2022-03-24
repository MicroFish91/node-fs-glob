import * as fse from "fs-extra";
import path from "path";

export async function buildDirs(dirs: string[]): Promise<void> {
  await fse.ensureDir(path.join(__dirname, "..", "test_playground"));

  for (let dir of dirs) {
    dir = path.join(__dirname, "..", "test_playground", dir);

    // CHMOD 2775
    // const desiredMode = 0o2775;
    // const options = {
    //   mode: desiredMode,
    // };

    try {
      await fse.ensureDir(dir);
      console.log("success!");
    } catch (err) {
      console.error(err);
    }
  }
}
