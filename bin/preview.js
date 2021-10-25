#!/usr/bin/env node

const {createServer} = require('vite')
const fs = require("fs-extra");

const port = 3000;
const pixeenPath = '.pixeen'
const userTemplatePath = `${pixeenPath}/preview/index.html`
const userComponentPath = `${pixeenPath}/preview/index.tsx`
const pixeenTemplatePath = `${__dirname}/../templates/preview/index.html`
const pixeenComponentPath = `${__dirname}/../templates/preview/index.tsx`

const init = async () => {
    if (!await fs.exists(userTemplatePath)) {
        await fs.copy(pixeenTemplatePath, userTemplatePath)
        console.log(`✓ ${userTemplatePath} created in project root.`)
    }
    if (!await fs.exists(userComponentPath)) {
        await fs.copy(pixeenComponentPath, userComponentPath)
        console.log(`✓ ${userComponentPath} created in project root.`)
    }
    console.log(`✓ Found Pixeen configuration.`)
    console.log('🌐 Starting server...')
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
    session.printUrls()
}


init().then(serve)
