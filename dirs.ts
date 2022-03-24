import * as fse from "fs-extra";
import path from "path";

export async function buildDirs(dirs: string[]): Promise<void> {
  for (let dir of dirs) {
    dir = path.join(__dirname, dir);

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
