import * as fse from "fs-extra";
import path from "path";
import { FILE_EXTENSIONS, ROOT_DIR } from "./constants";

export async function writeStdFiles(): Promise<void> {
  const basePath = path.join(ROOT_DIR, "test_playground", "std");

  await fse.writeFile(path.join(basePath, "test1", "example0.js"), "c");
  await fse.writeFile(path.join(basePath, "test1", "example1.jsx"), "c");
  await fse.writeFile(path.join(basePath, "test1", "example2.ts"), "c");
  await fse.writeFile(path.join(basePath, "test1", "example3.tsx"), "c");

  await fse.writeFile(path.join(basePath, "test1/again1", "#example4.js"), "c");
  await fse.writeFile(path.join(basePath, "test1/again1", "#example5.ts"), "c");

  await fse.writeFile(path.join(basePath, "test1/again2", "example6.rs"), "c");
  await fse.writeFile(path.join(basePath, "test1/again2", "#example7.ts"), "c");

  await fse.writeFile(path.join(basePath, "test1/again3", "example21.js"), "c");
  await fse.writeFile(path.join(basePath, "test1/again3", "#example22.ts"), "");

  await fse.writeFile(path.join(basePath, "test2", "example8.js"), "c");
  await fse.writeFile(path.join(basePath, "test2", "example9.jsx"), "c");
  await fse.writeFile(path.join(basePath, "test2", "example10.ts"), "c");
  await fse.writeFile(path.join(basePath, "test2", "example11.tsx"), "c");

  await fse.writeFile(path.join(basePath, "test3", "example12.js"), "c");
  await fse.writeFile(path.join(basePath, "test3", "example13.jsx"), "c");
  await fse.writeFile(path.join(basePath, "test3", "example14.ts"), "c");
  await fse.writeFile(path.join(basePath, "test3", "example15.tsx"), "c");

  await fse.writeFile(path.join(basePath, "test", "example18.js"), "c");
  await fse.writeFile(path.join(basePath, "test", "example19.ts"), "c");
  await fse.writeFile(path.join(basePath, "test", "example20.tsx"), "c");

  await fse.writeFile(path.join(basePath, "example16.js"), "c");
  await fse.writeFile(path.join(basePath, "example17.ts"), "c");
}

export async function writeRandomizedFiles(dirs: string[]): Promise<void> {
  let filesToCreate = Math.floor(Math.random() * 10) + 1;

  for (let dir of dirs) {
    filesToCreate = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < filesToCreate; i++) {
      const extIndex = Math.floor(Math.random() * FILE_EXTENSIONS.length);
      const content = "test data";
      const contentPath = path.join(
        ROOT_DIR,
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

export async function moveFiles(
  srcLocations: string[],
  dest: string
): Promise<void> {
  try {
    for (const src of srcLocations) {
      const srcPath = path.join(ROOT_DIR, src);
      const destPath = path.join(ROOT_DIR, dest, path.basename(src));
      await fse.move(srcPath, destPath, { overwrite: true });
    }
  } catch (err) {
    console.log(err);
  }
}
