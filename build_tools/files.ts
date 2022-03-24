import * as fse from "fs-extra";
import path from "path";

export async function writeFiles(dirs: string[]): Promise<void> {
  const FILE_EXTENSIONS = [".ts", ".js", ".txt", ".rs", ".json", ".lock"];

  let filesToCreate = Math.floor(Math.random() * 10) + 1;

  // some files in root
  for (let i = 0; i < filesToCreate; i++) {
    try {
      await fse.writeFile(
        path.join(
          __dirname,
          "..",
          "test_playground",
          `example${i}${
            FILE_EXTENSIONS[Math.floor(Math.random() * FILE_EXTENSIONS.length)]
          }`
        ),
        "test"
      );
    } catch (err) {
      console.log(err);
    }
  }

  // some files in the other listed dirs
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
