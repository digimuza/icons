import { execute } from "./comand.ts";
import { root } from "./constants.ts";
import { log, logEnd } from "./log.ts";

export async function buildProject() {
	await execute("Installing deps", "yarn");
	await execute("Removing dist folder", "rm -rf ./dist");
	await execute(
		"Building typescript",
		"yarn tsc --project ./tsconfig.build.json",
	);

	log("Copying package.json");

	const pkg = await Deno.readTextFile(root("./package.json"));
	const pkgJson = JSON.parse(pkg);
	pkgJson.scripts = undefined;
	pkgJson.devDependencies = undefined;
	pkgJson.private = undefined;
	pkgJson.jest = undefined;
	pkgJson["lint-staged"] = undefined;
	pkgJson["husky"] = undefined;
	pkgJson["prettier"] = undefined;
	pkgJson["eslintConfig"] = undefined;
	pkgJson["browserslist"] = undefined;
	pkgJson["jest"] = undefined;
	pkgJson["jest-transform-stub"] = undefined;
	pkgJson["ts-jest"] = undefined;
	pkgJson["ts-node"] = undefined;
	pkgJson["tsconfig.jest.json"] = undefined;
	console.log(pkgJson);
	await Deno.writeFile(
		root("./dist/package.json"),
		new TextEncoder().encode(JSON.stringify(pkgJson, null, 2)),
	);
	log("Copying README.md");
	await Deno.copyFile(root("./README.md"), root("./dist/README.md"));
	logEnd();
}
