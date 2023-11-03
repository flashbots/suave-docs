# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Getting started

Use Node.js v18+

```bash
# check out git submodules
git submodule init
git submodule update
```

Note: if you want to install the node packages from within a Docker container (recommended for security), then you can start it like this:

```bash
docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(pwd):/mnt node:20 /bin/bash

# shortcut:
make docker
```

First create a copy of the environment file `.env.template` in the root of the codebase and rename it to `.env`:

```bash
cp .env.template .env
```

Then install the dependencies and serve the content:

```bash
# install dependencies
yarn install

# start dev-server
yarn start

# doing the same in Docker:
make docker-deps
make docker-start
```

Changes are reflected live without having to restart the server.

You can open the local docs at [http://localhost:3000/docs](http://localhost:3000/docs)

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The docs use Vercel for hosting, and deployment is done by Vercel on any merge into the main branch.

## Icons

If you want to use icons, best copy the SVG from one of these:

- https://feathericons.com/
- https://boxicons.com/
- https://icons.getbootstrap.com/