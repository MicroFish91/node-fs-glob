import glob from "glob-promise";

export async function getByExt(fileExt: string): Promise<string[]> {
  return await glob(`test_playground/std/**/*${fileExt}`);
}
