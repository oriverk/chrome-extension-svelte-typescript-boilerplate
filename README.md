# Svelte Typescript Chrome Extension Boilerplate

> Boilerplate for Chrome Extension Svelte Typescript project

## procedure

```bash
npm create @eslint/config
npm i -D eslint-plugin-svelte3
npm create prettier
npm i -D eslint config-prettier prettier-plugin-svelte eslint-plugin-import
# modify .vscode/setting.json for vscode extension
npm i -D stylelint stylelint-config-standard postcss-html stylelint-config-html stylelint-config-recess-order
```

```bash
npm i -D @commitlint/{config-conventional,cli}
# touch .commitlintrc.json
npm i -D husky
npx husky install
npx husky add .husky/commit-msg 'npm run lint'
npx husky add .husky/commit-msg 'npx commitlint --edit ${1}'
```

- `feat:`：新機能
- `fix:`：バグフィックス
- `refactor:`：新機能でもバグフィックスでもないコード変更
- `perf:`：パフォーマンス向上
- `test:`：テストコードの追加・修正
- `style:`：コードの意味に影響しない変更（空白、フォーマット、セミコロン）
- `docs:`：ドキュメントだけの変更
- `chore:`：雑用（ビルドプロセスの変更、ツールやライブラリの追加削除）

## Features

- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [CRXJS Vite Plugin](https://github.com/crxjs/chrome-extension-tools/blob/main/packages/vite-plugin/README.md)
- [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Development

```bash
# install dependencies
npm i

# build files to `/dist` directory
# HMR for extension pages and content scripts
npm run dev
```

## Build

```bash
# build files to `/dist` directory
$ npm run build
```

## Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

![Example](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format&w=571)
