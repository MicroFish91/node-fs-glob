import * as fse from "fs-extra";
import path from "path";
import { FILE_EXTENSIONS } from "./constants";

export async function writeFiles(dirs: string[]): Promise<void> {
  let filesToCreate = Math.floor(Math.random() * 10) + 1;

  for (let dir of dirs) {
    filesToCreate = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < filesToCreate; i++) {
      const extIndex = Math.floor(Math.random() * FILE_EXTENSIONS.length);
      const content = "test data";
      const contentPath = path.join(
        __dirname,
        "..",
        "test_playground",
        dir,
        `example${i}${FILE_EXTENSIONS[extIndex]}`
      );

      try {
        await fse.writeFile(contentPath, content);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
