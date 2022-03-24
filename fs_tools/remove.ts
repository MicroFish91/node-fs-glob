import * as fse from "fs-extra";
import path from "path";

export async function removeFilesAndDirs(): Promise<void> {
  try {
    await fse.remove(path.join(__dirname, "..", "test_playground"));
  } catch (err) {
    console.log(err);
  }
}
