import * as path from "https://deno.land/std@0.188.0/path/mod.ts";
import { SOURCE_FOLDER } from "./utils/constants.ts";

function existSync(...pathUrl: string[]) {
	for (const p of pathUrl) {
		try {
			Deno.lstatSync(p);
			return {
				exist: true,
				path: p,
			};
		} catch {
			// ignore
		}
	}

	return null;
}

async function regularImports(dirPath: string) {
	const dirName = path.basename(dirPath);
	if (dirName.startsWith("_")) return;
	const dir = await Deno.readDir(dirPath);
	const files: string[] = [];
	const dirs: string[] = [];

	for await (const file of dir) {
		if (file.isDirectory) {
			await regularImports(path.join(dirPath, file.name));
			if (file.name.startsWith("_")) continue;
			dirs.push(file.name);
			continue;
		}
		const allowedExtensions = [".ts", ".tsx"].some((ext) =>
			file.name.endsWith(ext),
		);
		if (!allowedExtensions) continue;
		files.push(file.name);
	}

	const exports = files
		.map((file) => {
			const fileName = file.replace(path.extname(file), "");
			if (fileName.endsWith(".stories")) return;
			if (fileName.endsWith(".test")) return;
			if (fileName.endsWith("index")) return;
			if (fileName.endsWith(".spec")) return;
			if (fileName.endsWith(".d")) return;
			return `export * from "./${file.replace(path.extname(file), "")}";`;
		})
		.filter((x): x is string => !!x);

	const index = existSync(
		path.join(dirPath, "index.ts"),
		path.join(dirPath, "index.tsx"),
	);
	if (index) {
		const file = await Deno.readTextFile(index.path);
		if (!file.includes("scripts/import-x.ts")) {
			console.log(`Index file already exists ${index.path}`);
			return;
		}
	}

	await Deno.writeTextFile(
		path.join(dirPath, "index.ts"),
		`// This file is auto-generated by scripts/import-x.ts
${dirs.map((dir) => `export * from "./${dir}";`).join("\n")}
${exports.join("\n")}
  `,
	);
}

await regularImports(SOURCE_FOLDER);