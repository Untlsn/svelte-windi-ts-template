# SvelteKit WindiCSS + Typescript template

Based on SvelteKit demo  
Simple Svelte template build on SvelteKit (build on vite) with WidniCSS (tailwind alternative) and Typescript

## Example
...

## Creating a project
Template is not shared with other sources (and probably will never be), so the only way is to download it from github

```bash
git clone git@github.com:Untlsn/svelte-windi-ts-template.git my-app
cd ./my-app

npm i
# or
yarn install
# or (preferred)
pnpm i
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
# shorthand
npm run dev:open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
