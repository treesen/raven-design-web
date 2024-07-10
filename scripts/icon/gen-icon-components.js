#!/usr/bin/env node

const fs = require("fs-extra");
const glob = require("glob");
const path = require("path");
const { optimize } = require("svgo");
const { JSDOM } = require("jsdom");

const root = process.cwd();
console.log("root", root);

function resolvePath(...relativePath) {
  return path.resolve(root, ...relativePath);
}

const getSvgList = () => {
  const list = [];
  const svgFiles = glob.sync("*.svg", {
    cwd: resolvePath("./scripts/icon/svgs"),
    absolute: true,
  });
  for (const filePath of svgFiles) {
    const name = `icon-${path.basename(filePath, ".svg")}`;
    list.push(name);
    genVueFile(optimizeSvg(filePath), name);
  }

  genInstallFile(list);

  return list;
};

const optimizeSvg = (filePath) => {
  const svgFile = fs.readFileSync(filePath, "utf8");
  const svg = optimize(svgFile, {
    path: filePath,
    plugins: [
      {
        name: "removeAttrs",
        params: {
          attrs: "(fill|stroke)",
        },
      },
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ fill: "currentColor" }],
        },
      },
    ],
  });
  return svg["data"];
};

const genVueFile = (svgData, name) => {
  if (svgData) {
    const svgEle = JSDOM.fragment(svgData).firstElementChild;
    if (svgEle) {
      fs.outputFile(
        path.resolve(resolvePath("./src/components/icon"), `${name}.vue`),
        getVueFileString(svgEle.outerHTML, name)
      );
    }
  }
};
const genInstallFile = (nameList) => {
  const imports = [];
  nameList.forEach((name) => {
    imports.push(`import ${toPascalCase(name)} from './${name}.vue';`);
  });
  fs.outputFile(
    path.resolve(resolvePath("./src/components/icon"), `index.ts`),
    getInstallFileString(imports, nameList)
  );
};
const getInstallFileString = (imports, nameList) => {
  return `import _Vue from "vue";
${imports.join(";\n")}
const components: Record<string, any> = {
  ${nameList.map((n) => toPascalCase(n)).join(",\n")}
};

const Icon =  {
  install: (Vue: typeof _Vue): void => {
    for (const key in components) {
      const component = components[key];
      Vue.component(key, component);
    }
  },
};
_Vue.use(Icon);

export default components;
    `;
};
const getVueFileString = (svgEle, name) => {
  return `<template>
      ${svgEle}
    </template>

    <script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
      name: "${name}",
    });
    </script>
      `;
};

const toPascalCase = (string) => {
  return string
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/-(.)/g, (_, p1) => {
      return p1.toLocaleUpperCase();
    });
};

getSvgList();
