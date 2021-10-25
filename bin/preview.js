#!/usr/bin/env node

const {createServer} = require('vite')
const fs = require("fs-extra");
const colors = require('colors');

const port = 3000;
const pixeenPath = '.pixeen'
const userTemplatePath = `${pixeenPath}/preview/index.html`
const userComponentPath = `${pixeenPath}/preview/index.tsx`
const pixeenTemplatePath = `${__dirname}/../templates/preview/index.html`
const pixeenComponentPath = `${__dirname}/../templates/preview/index.tsx`

const init = async () => {
    console.log(`Starting Pixeen Preview...`.bgYellow.black)
    if (!await fs.exists(userTemplatePath)) {
        await fs.copy(pixeenTemplatePath, userTemplatePath)
        console.log(` ${'✓'.green} File “${userTemplatePath}” created in project root.`)
    }
    if (!await fs.exists(userComponentPath)) {
        await fs.copy(pixeenComponentPath, userComponentPath)
        console.log(` ${'✓'.green} File “${userComponentPath}” created in project root.`)
    }
};

const serve = async () => {
    const server = await createServer({
        root: `${process.cwd()}/${pixeenPath}/preview`,
        server: {
            port,
            host: true,
            // open: true,
        },
    })
    const session = await server.listen()
     console.log(`Started Pixeen Preview...`.bgGreen.black)
   session.printUrls()
}


init().then(serve)
