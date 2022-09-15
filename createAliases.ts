import { readdir } from "fs/promises";
import { resolve } from "path";
import type { UserConfig } from "vite";

interface Alias {
	root: string;
	aliases: { [key: string]: string };
}

export async function createAliases(...aliases: Alias[]): Promise<UserConfig[]> {
	const out: UserConfig[] = [];
	for (const alias of aliases) {
		const dir = await readdir(alias.root, { withFileTypes: true });
		const aliases: Record<string, string> = {};
		for (const key of Object.keys(alias.aliases)) {
			aliases[key] = resolve(alias.root, alias.aliases[key]);
		}
		for (const dirent of dir) {
			if (dirent.isFile() && dirent.name.endsWith(".ts")) {
				aliases[dirent.name.replace(".ts", "")] = resolve(alias.root, dirent.name);
			} else {
				aliases[dirent.name] = resolve(alias.root, dirent.name);
			}
		}
		out.push({ resolve: { alias: aliases } });
	}
	return out;
}
