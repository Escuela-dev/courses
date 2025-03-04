import fs from "fs";
import path from "path";

const sidebar = [];
const root_docs = ["src", "content", "docs"].join(path.sep) + path.sep;

function traverseDirectory(dir, parent) {
  try {
    // console.log(dir)
    parent.label = fs.existsSync(`${dir + path.sep}__section.md`)
      ? fs
          .readFileSync(`${dir + path.sep}__section.md`, "utf8")
          .split("\n")[0]
          .replace("#", "")
          .trim()
      : dir.replace(root_docs, "");

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // biome-ignore lint/complexity/noForEach: <explanation>
    entries
      .filter((entry) => entry.name !== ".DS_Store")
      .forEach((entry) => {
        const fullPath = path.join(dir, entry.name);
        // console.log({ entry, fullPath });

        if (entry.isDirectory()) {
          const new_section = {
            label: entry.name,
            collapsed: false,
            items: [],
          };
          parent.items.push(new_section);
          traverseDirectory(fullPath, new_section);
        } else {
          if (entry.name.includes("__section")) {
            // skip __section.md
            return;
          }
          const slug = `${fullPath.replace(root_docs, "").replace(/\\/g, "/")}`
            .split(".")
            .slice(0, -1)
            .join(".");
          // console.log({ entry, slug });

          if (entry.name.endsWith(".md")) {
            parent.items.push(slug);
          }
        }
      });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
}

export default function (root, collapsed = true) {
  sidebar.length = 0;
  const _parent = {
    label: root,
    collapsed,
    items: [],
  };
  sidebar.push(_parent);
  traverseDirectory(root, _parent);
  // console.log({ sidebar }, sidebar[0].items);

  return sidebar;
}
